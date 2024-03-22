import React, { useEffect } from "react";
import { AdvertsItem } from "../AdvertsItem/AdvertsItem";
import { useDispatch, useSelector } from "react-redux";
import { initializeFavorites } from "../../redux/adverts/favoriteSlice";
import { List } from "../AdvertsList/AdvertsList.styled";

export const FavoritesList = () => {
  const dispatch = useDispatch();
  const favoriteAdverts = useSelector((state) => state.favorites.items);

  useEffect(() => {
    dispatch(initializeFavorites());
  }, [dispatch]);

  return (
    <div>
      <List>
        {favoriteAdverts.map((advert) => (
          <AdvertsItem key={advert._id} item={advert} />
        ))}
      </List>
    </div>
  );
};
