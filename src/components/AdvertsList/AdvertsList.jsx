import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdverts } from "../../redux/adverts/api.js";
import { AdvertsItem } from "../AdvertsItem/AdvertsItem.jsx";
import { List } from "./AdvertsList.styled.js";

export const AdvertsList = () => {
  const responseAdverts = useSelector((state) => state.adverts.items);
  console.log("🚀 ~ HomePage ~ responseAdverts:", responseAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div>
      <List>
        {responseAdverts.map((item) => (
          <AdvertsItem key={item._id} item={item} />
        ))}
      </List>
    </div>
  );
};
