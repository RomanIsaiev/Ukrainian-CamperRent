import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAdverts } from "../../redux/adverts/api.js";
import { AdvertsItem } from "../AdvertsItem/AdvertsItem.jsx";
import { List } from "./AdvertsList.styled.js";

export const AdvertsList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(4);
  const responseAdverts = useSelector((state) => state.adverts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit }));
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(fetchAdverts({ page: nextPage, limit }));
    setPage(nextPage);
  };

  return (
    <div>
      <List>
        {responseAdverts.map((item) => (
          <AdvertsItem key={item._id} item={item} />
        ))}
      </List>

      {responseAdverts.length >= page * limit &&
        responseAdverts.length % limit === 0 && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
    </div>
  );
};
