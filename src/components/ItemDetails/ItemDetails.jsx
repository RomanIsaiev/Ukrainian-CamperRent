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
  FavButton,
  FavIcon,
  Gallery,
  GalleryItem,
  CloseBtn,
  CloseBtnIcon,
  Modal,
  ScrollBox,
  NavList,
} from "./ItemDetails.styled";

import sprite from "../../assets/sprite.svg";
import { NavLink, Outlet } from "react-router-dom";

export const ItemDetails = ({ item, onClose }) => {
  console.log(item);
  return (
    <Modal>
      <div>
        <Name>{item.name}</Name>
      </div>
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
      <div>
        <Price>€{parseFloat(item.price).toFixed(2)}</Price>
      </div>
      <ScrollBox>
        <div>
          <Gallery>
            {item.gallery.map((image, index) => (
              <li key={index}>
                <ImageBox>
                  <Image src={image} alt={item.name} />
                </ImageBox>
              </li>
            ))}
          </Gallery>
        </div>
        <div>
          <Desc>{item.description}</Desc>
        </div>
        <div>
          <NavList>
            <li>
              <NavLink to="features">features</NavLink>
            </li>
            <li>
              <NavLink to="reviews">reviews</NavLink>
            </li>
          </NavList>
        </div>
        <Outlet context={item} />
      </ScrollBox>
      <CloseBtn onClick={onClose}>
        <CloseBtnIcon>
          <use href={`${sprite}#close-modal`}></use>
        </CloseBtnIcon>
      </CloseBtn>
    </Modal>
  );
};
