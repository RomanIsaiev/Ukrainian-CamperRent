import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const Modal = styled.div`
  position: relative;
`;

export const RatingLocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  margin-bottom: 16px;
`;

export const RateLocInnerBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4px;
`;

export const RatingLocationIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const CategoriesIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #101010;
  stroke: #101010;
`;

export const RateLocText = styled.p`
  color: #101828;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
`;

export const Gallery = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 24px;
`;

export const ImageBox = styled.div`
  width: 290px;
  height: 310px;
`;

export const Image = styled.img`
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const InfoBox = styled.div`
  max-width: 526px;
  height: 310px;
`;

export const DescContainer = styled.div`
  max-width: 525px;

  margin-bottom: 24px;
`;

export const Desc = styled.p`
  color: #475467;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  margin-bottom: 44px;

  max-width: 902px;
`;

export const PriceFavoriteBox = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;

  display: flex;
  align-items: center;
  gap: 11px;
`;

export const Price = styled.p`
  color: #101828;
  font-family: "Inter";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */

  margin-bottom: 24px;
`;

export const Name = styled.h3`
  color: #101828;

  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */

  margin-bottom: 10px;
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 24px;
`;

export const CategoryItem = styled.li`
  padding: 12px;
  border-radius: 100px;
  background: #f2f4f7;
  mix-blend-mode: multiply;
  max-width: 150px;
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const CategoryText = styled.p`
  color: #101828;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
`;

export const Button = styled.button`
  display: block;

  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;

  border: none;
  padding: 16px;

  border-radius: 200px;
  background: #e44848;

  max-width: 166px;
  width: 100%;
`;

export const FavButton = styled.button`
  background: none;
  border: none;
`;

export const FavIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  background: none;
  border: none;
`;

export const CloseBtnIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #101010;
`;

export const ScrollBox = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 720px;
  max-width: 926px;
  padding-bottom: 40px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 7px;
    height: 153px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;
`;

export const StarIcon = styled.svg`
  fill: #ffc531;
  stroke: #ffc531;
  width: 16px;
  height: 16px;
`;

export const PinIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const StyledNavLink = styled(RouterNavLink)`
  color: #101828;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
  text-transform: capitalize;

  &:hover {
    color: #e44848;
  }

  &.active {
    color: #e44848;
  }

  &.active::after {
    content: "";
    display: block;

    height: 5px;
    width: 100%;

    background: #e44848;

    margin-top: 24px;
  }
`;
