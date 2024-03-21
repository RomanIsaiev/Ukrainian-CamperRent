import styled from "styled-components";

export const RatingLocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  margin-bottom: 24px;
`;

export const RateLocInnerBox = styled.div`
  display: flex;
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

//

export const Item = styled.li`
  position: relative;

  display: flex;
  flex-direction: row;
  gap: 24px;

  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background: #fff;

  max-width: 888px;
`;

export const ImageBox = styled.div`
  width: 290px;
  height: 310px;
`;

export const Image = styled.img`
  border-radius: 10px;
  object-fit: cover;
  width: 290px;
  height: 310px;
`;

export const InfoBox = styled.div`
  max-width: 526px;
  height: 310px;
`;

//

export const DescContainer = styled.div`
  max-width: 525px;

  margin-bottom: 24px;
`;

export const Desc = styled.p`
  overflow: hidden;
  color: #475467;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

//

export const PriceFavoriteBox = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;

export const Price = styled.p`
  color: #101828;
  font-family: "Inter";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */
`;

//

export const Name = styled.h3`
  color: #101828;

  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */

  margin-bottom: 8px;
`;

//

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

//

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
