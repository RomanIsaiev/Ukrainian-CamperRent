import sprite from "../../../assets/sprite.svg";
import {
  Comment,
  EmptyIcon,
  FilledIcon,
  Initial,
  Item,
  Name,
  NameRateBox,
  PhotoBox,
  UserContainer,
} from "./ReviewsItem.styled";

const FilledStarIcon = () => (
  <span>
    <FilledIcon>
      <use href={`${sprite}#star`}></use>
    </FilledIcon>
  </span>
);

const EmptyStarIcon = () => (
  <span>
    <EmptyIcon>
      <use href={`${sprite}#star`}></use>
    </EmptyIcon>
  </span>
);

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FilledStarIcon key={i} />);
    } else {
      stars.push(<EmptyStarIcon key={i} />);
    }
  }
  return <div>{stars}</div>;
};

export const ReviewsItem = ({ item }) => {
  const initial = item.reviewer_name.charAt(0).toUpperCase();
  return (
    <Item>
      <div>
        <UserContainer>
          <PhotoBox>
            <Initial>{initial}</Initial>
          </PhotoBox>
          <NameRateBox>
            <Name>{item.reviewer_name}</Name>
            <RatingStars rating={item.reviewer_rating} />
          </NameRateBox>
        </UserContainer>
        <div>
          <Comment>{item.comment}</Comment>
        </div>
      </div>
    </Item>
  );
};
