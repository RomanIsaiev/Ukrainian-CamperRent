import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAdverts } from "../../redux/adverts/api.js";
import { AdvertsItem } from "../AdvertsItem/AdvertsItem.jsx";
import {
  List,
  LoadButton,
  MainContainer,
  NoResulst,
} from "./AdvertsList.styled.js";
import { LocationFilter } from "../Filters/LocationFilter/LocationFilter.jsx";
import { EquipmentFilter } from "../Filters/EquipmentFilter/EquipmentFilter.jsx";

export const AdvertsList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(4);
  const [locationFilter, setLocationFilter] = useState("");
  const [equipmentFilter, setEquipmentFilter] = useState({
    airConditioner: false,
    transmission: "",
    kitchen: false,
    TV: false,
    shower: false,
    toilet: false,
  });
  const allAdverts = useSelector((state) => state.adverts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit }));
  }, [dispatch, limit, page]);

  const filteredAdverts = allAdverts.filter((advert) => {
    const locationMatch = advert.location
      .toLowerCase()
      .includes(locationFilter.toLowerCase());
    const airConditionerMatch =
      !equipmentFilter.airConditioner || advert.details.airConditioner > 0;
    const transmissionMatch =
      equipmentFilter.transmission === "" ||
      advert.transmission === equipmentFilter.transmission;
    const kitchenMatch = !equipmentFilter.kitchen || advert.details.kitchen > 0;
    const TVMatch = !equipmentFilter.TV || advert.details.TV > 0;
    const showerMatch = !equipmentFilter.shower || advert.details.shower > 0;
    const toiletMatch = !equipmentFilter.toilet || advert.details.toilet > 0;
    return (
      locationMatch &&
      airConditionerMatch &&
      transmissionMatch &&
      kitchenMatch &&
      TVMatch &&
      showerMatch &&
      toiletMatch
    );
  });

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(fetchAdverts({ page: nextPage, limit }));
    setPage(nextPage);
  };

  const handleLocationFilterChange = (newLocation) => {
    setLocationFilter(newLocation);
  };

  const handleEquipmentFilterChange = (newEquipment) => {
    setEquipmentFilter((prevFilter) => ({ ...prevFilter, ...newEquipment }));
  };

  return (
    <MainContainer>
      <div>
        <LocationFilter onFilterChange={handleLocationFilterChange} />
        <EquipmentFilter onFilterChange={handleEquipmentFilterChange} />
      </div>
      <div>
        <List>
          {filteredAdverts.length > 0 ? (
            filteredAdverts.map((item) => (
              <AdvertsItem key={item._id} item={item} />
            ))
          ) : (
            <NoResulst>Nothing was found for your filter</NoResulst>
          )}
        </List>
        {filteredAdverts.length >= page * limit &&
          filteredAdverts.length % limit === 0 && (
            <LoadButton onClick={handleLoadMore}>Load More</LoadButton>
          )}
      </div>
    </MainContainer>
  );
};
