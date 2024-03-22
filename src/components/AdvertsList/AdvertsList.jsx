import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAdverts } from "../../redux/adverts/api.js";
import { AdvertsItem } from "../AdvertsItem/AdvertsItem.jsx";
import { List } from "./AdvertsList.styled.js";

export const AdvertsList = () => {
  const responseAdverts = useSelector((state) => state.adverts.items);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(4); // Количество объявлений на странице

  useEffect(() => {
    dispatch(fetchAdverts({ page, itemsPerPage }));
  }, [dispatch, page, itemsPerPage]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <List>
        {responseAdverts.map((item) => (
          <AdvertsItem key={item._id} item={item} />
        ))}
      </List>
      {responseAdverts.length >= itemsPerPage && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};
