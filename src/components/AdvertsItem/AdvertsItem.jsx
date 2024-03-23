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
} from "./AdvertsItem.styled";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFavorite, removeFavorite } from "../../redux/adverts/favoriteSlice";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { ItemDetails } from "../ItemDetails/ItemDetails";
import { useLocation, useNavigate } from "react-router-dom";

export const AdvertsItem = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const [isFavorite, setIsFavorite] = useState(
    favorites.some((fav) => fav._id === item._id)
  );
  const [isModalOpen, setIsModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleModalClose = () => {
    setIsModal(false);
    if (location.pathname.startsWith("/favorites")) {
      navigate("/favorites");
    } else {
      navigate("/catalog");
    }
  };

  const handleShowMoreClick = () => {
    setIsModal(true);
    if (location.pathname.startsWith("/catalog")) {
      navigate("/catalog/features");
    } else if (location.pathname.startsWith("/favorites")) {
      navigate("/favorites/features");
    } else {
      navigate("/catalog");
    }
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.some((fav) => fav._id === item._id));
  }, [item._id, favorites]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(item._id));
      setIsFavorite(false);
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      const newFavorites = storedFavorites.filter(
        (fav) => fav._id !== item._id
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      dispatch(addFavorite(item)); // Передаем объект item целиком
      setIsFavorite(true);
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      storedFavorites.push(item);
      localStorage.setItem("favorites", JSON.stringify(storedFavorites));
    }
  };

  return (
    <>
      <Item key={item._id}>
        <ImageBox>
          <Image src={item.gallery[0]} alt={item.name} />
        </ImageBox>
        <InfoBox>
          <PriceFavoriteBox>
            <Price>€{parseFloat(item.price).toFixed(2)}</Price>
            <FavButton onClick={handleFavoriteClick}>
              {isFavorite ? (
                <FavIcon>
                  <use href={`${sprite}#pressed`}></use>
                </FavIcon>
              ) : (
                <FavIcon>
                  <use href={`${sprite}#unpressed`}></use>
                </FavIcon>
              )}
            </FavButton>
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
          <Button type="button" onClick={handleShowMoreClick}>
            Show more
          </Button>
        </InfoBox>
      </Item>
      {isModalOpen && (
        <ModalWindow isOpen={isModalOpen} onClose={handleModalClose}>
          <ItemDetails item={item} onClose={handleModalClose} />
        </ModalWindow>
      )}
    </>
  );
};
