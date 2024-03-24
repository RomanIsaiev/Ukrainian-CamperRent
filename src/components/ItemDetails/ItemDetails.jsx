import {
  RatingLocationContainer,
  RateLocInnerBox,
  RateLocText,
  Image,
  ImageBox,
  Desc,
  Price,
  Name,
  Gallery,
  CloseBtn,
  CloseBtnIcon,
  Modal,
  ScrollBox,
  NavList,
  StarIcon,
  PinIcon,
} from "./ItemDetails.styled";

import sprite from "../../assets/sprite.svg";
import { NavLink, Outlet } from "react-router-dom";

export const ItemDetails = ({ item, onClose }) => {
  return (
    <Modal>
      <div>
        <Name>{item.name}</Name>
      </div>
      <RatingLocationContainer>
        <RateLocInnerBox>
          <StarIcon>
            <use href={`${sprite}#star`}></use>
          </StarIcon>
          <RateLocText>
            {item.rating} ({item.reviews.length} Reviews)
          </RateLocText>
        </RateLocInnerBox>
        <RateLocInnerBox>
          <PinIcon>
            <use href={`${sprite}#map-pin`}></use>
          </PinIcon>
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
