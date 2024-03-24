import React, { useEffect, useState } from "react";
import { AdvertsItem } from "../AdvertsItem/AdvertsItem";
import { useDispatch, useSelector } from "react-redux";
import { initializeFavorites } from "../../redux/adverts/favoriteSlice";
import { List } from "../AdvertsList/AdvertsList.styled";
import { MainContainer } from "./FavoritesList.styled";
import { LocationFilter } from "../Filters/LocationFilter/LocationFilter";

export const FavoritesList = () => {
  const dispatch = useDispatch();
  const favoriteAdverts = useSelector((state) => state.favorites.items);
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    dispatch(initializeFavorites());
  }, [dispatch]);

  const handleLocationFilterChange = (newLocation) => {
    setLocationFilter(newLocation);
  };

  const filteredFavorites = favoriteAdverts.filter((advert) =>
    advert.location.toLowerCase().includes(locationFilter.toLowerCase())
  );

  return (
    <MainContainer>
      <div>
        <LocationFilter onFilterChange={handleLocationFilterChange} />
      </div>
      <div>
        <List>
          {filteredFavorites.map((advert) => (
            <AdvertsItem key={advert._id} item={advert} />
          ))}
        </List>
      </div>
    </MainContainer>
  );
};
