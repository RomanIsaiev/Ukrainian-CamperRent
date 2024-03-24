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

export const AdvertsList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(4);
  const [locationFilter, setLocationFilter] = useState("");
  const allAdverts = useSelector((state) => state.adverts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit }));
  }, [dispatch, limit, page]);

  // Фильтруем объявления на основе фильтра
  const filteredAdverts = allAdverts.filter((advert) =>
    advert.location.toLowerCase().includes(locationFilter.toLowerCase())
  );

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(fetchAdverts({ page: nextPage, limit }));
    setPage(nextPage);
  };

  const handleLocationFilterChange = (newLocation) => {
    setLocationFilter(newLocation);
  };

  return (
    <MainContainer>
      <div>
        <LocationFilter onFilterChange={handleLocationFilterChange} />
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
