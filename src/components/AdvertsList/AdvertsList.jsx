import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAdverts } from "../../redux/adverts/api.js";
import { AdvertsItem } from "../AdvertsItem/AdvertsItem.jsx";
import {
  Filters,
  List,
  LoadButton,
  MainContainer,
  NoResulst,
  SeacrhButton,
} from "./AdvertsList.styled.js";
import { LocationFilter } from "../Filters/LocationFilter/LocationFilter.jsx";
import { EquipmentFilter } from "../Filters/EquipmentFilter/EquipmentFilter.jsx";
import { VehicleTypeFilter } from "../Filters/VehicleTypeFilter/VehicleTypeFilter.jsx";

export const AdvertsList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(4);
  const [locationFilter, setLocationFilter] = useState("");
  const [equipmentFilter, setEquipmentFilter] = useState({
    airConditioner: false,
    automaticTransmission: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  });
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState("");
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const allAdverts = useSelector((state) => state.adverts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit }));
  }, [dispatch, limit, page]);

  useEffect(() => {
    setFilteredAdverts(allAdverts);
  }, [allAdverts]);

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

  const handleVehicleTypeFilterChange = (newVehicleType) => {
    setVehicleTypeFilter(newVehicleType);
  };

  const handleSearch = () => {
    const filteredList = allAdverts.filter((advert) => {
      const locationMatch = locationFilter
        ? advert.location.toLowerCase().includes(locationFilter.toLowerCase())
        : true;

      const airConditionerMatch = equipmentFilter.airConditioner
        ? advert.details.airConditioner > 0
        : true;

      const automaticTransmissionMatch = equipmentFilter.automaticTransmission
        ? advert.transmission === "automatic"
        : true;

      const kitchenMatch = equipmentFilter.kitchen
        ? advert.details.kitchen > 0
        : true;

      const TVMatch = equipmentFilter.TV ? advert.details.TV > 0 : true;

      const bathroomMatch = equipmentFilter.bathroom
        ? advert.details.bathroom > 0
        : true;

      const vehicleTypeMatch = vehicleTypeFilter
        ? advert.form === vehicleTypeFilter
        : true;

      return (
        locationMatch &&
        airConditionerMatch &&
        automaticTransmissionMatch &&
        kitchenMatch &&
        TVMatch &&
        bathroomMatch &&
        vehicleTypeMatch
      );
    });
    setFilteredAdverts(filteredList);
  };

  return (
    <MainContainer>
      <div>
        <LocationFilter onFilterChange={handleLocationFilterChange} />
        <Filters>Filters</Filters>
        <EquipmentFilter onFilterChange={handleEquipmentFilterChange} />
        <VehicleTypeFilter
          selectedVehicleType={vehicleTypeFilter}
          onFilterChange={handleVehicleTypeFilterChange}
        />
        <SeacrhButton onClick={handleSearch}>Search</SeacrhButton>
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
