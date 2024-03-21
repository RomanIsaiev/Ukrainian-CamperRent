import {
  RatingLocationContainer,
  RateLocInnerBox,
  RateLocText,
  RatingLocationIcon,
  CategoriesIcon,
  Item,
  Image,
  ImageBox,
  InfoBox,
  DescContainer,
  Desc,
  PriceFavoriteBox,
  Price,
  Name,
  CategoryList,
  CategoryItem,
  CategoryBox,
  CategoryText,
  Button,
} from "./AdvertsItem.styled";
import sprite from "../../assets/sprite.svg";

export const AdvertsItem = ({ item }) => {
  return (
    <>
      <Item key={item._id}>
        <ImageBox>
          <Image src={item.gallery[0]} alt={item.name} />
        </ImageBox>
        <InfoBox>
          <PriceFavoriteBox>
            <Price>€{parseFloat(item.price).toFixed(2)}</Price>
          </PriceFavoriteBox>
          <Name>{item.name}</Name>
          <RatingLocationContainer>
            <RateLocInnerBox>
              <RatingLocationIcon>
                <use href={`${sprite}#star`}></use>
              </RatingLocationIcon>
              <RateLocText>
                {item.rating} ({item.reviews.length} Reviews)
              </RateLocText>
            </RateLocInnerBox>
            <RateLocInnerBox>
              <RatingLocationIcon>
                <use href={`${sprite}#map-pin`}></use>
              </RatingLocationIcon>
              <p>{item.location}</p>
            </RateLocInnerBox>
          </RatingLocationContainer>
          <DescContainer>
            <Desc>{item.description}</Desc>
          </DescContainer>
          <div>
            <CategoryList>
              <CategoryItem>
                <CategoryBox>
                  <CategoriesIcon>
                    <use href={`${sprite}#users`}></use>
                  </CategoriesIcon>
                  <CategoryText>{item.adults} adults</CategoryText>
                </CategoryBox>
              </CategoryItem>
              <CategoryItem>
                <CategoryBox>
                  <CategoriesIcon>
                    <use href={`${sprite}#trans`}></use>
                  </CategoriesIcon>
                  <CategoryText>{item.transmission}</CategoryText>
                </CategoryBox>
              </CategoryItem>
              <CategoryItem>
                <CategoryBox>
                  <CategoriesIcon>
                    <use href={`${sprite}#fuel`}></use>
                  </CategoriesIcon>
                  <CategoryText>{item.engine}</CategoryText>
                </CategoryBox>
              </CategoryItem>
              {item.details.kitchen > 0 ? (
                <CategoryItem>
                  <CategoryBox>
                    <CategoriesIcon>
                      <use href={`${sprite}#kitchen`}></use>
                    </CategoriesIcon>
                    <CategoryText>Kitchen</CategoryText>
                  </CategoryBox>
                </CategoryItem>
              ) : null}
              <CategoryItem>
                <CategoryBox>
                  <CategoriesIcon>
                    <use href={`${sprite}#beds`}></use>
                  </CategoriesIcon>
                  <CategoryText>{item.details.beds} beds</CategoryText>
                </CategoryBox>
              </CategoryItem>
              {item.details.airConditioner > 0 ? (
                <CategoryItem>
                  <CategoryBox>
                    <CategoriesIcon>
                      <use href={`${sprite}#ac`}></use>
                    </CategoriesIcon>
                    <CategoryText>AC</CategoryText>
                  </CategoryBox>
                </CategoryItem>
              ) : null}
            </CategoryList>
          </div>
          <Button>Show more</Button>
        </InfoBox>
      </Item>
    </>
  );
};
