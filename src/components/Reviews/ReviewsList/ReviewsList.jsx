import { ReviewsItem } from "../ReviewsItem/ReviewsItem";
import { List } from "./ReviewsList.styled";

export const ReviewsList = ({ item }) => {
  console.log(item.reviews);
  return (
    <>
      <div>
        <List>
          {item.reviews.length > 0
            ? item.reviews.map((item, index) => (
                <ReviewsItem key={index} item={item} />
              ))
            : null}
        </List>
      </div>
    </>
  );
};
