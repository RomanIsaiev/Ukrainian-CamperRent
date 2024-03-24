import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const MainContainer = styled.div`
  padding-top: 100px;
`;

export const TitleContainer = styled.div`
  position: relative;

  max-width: 1158px;

  margin-left: 28px;
`;

export const Title = styled.h1`
  color: #101828;
  font-family: Inter;
  font-size: 200px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 15% */
  text-transform: uppercase;

  span {
    font-weight: 400;
  }
`;

export const SubTitle = styled.p`
  position: absolute;
  bottom: 23px;
  right: 0;

  color: #475467;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 24px */
  letter-spacing: -1.2px;
  text-transform: uppercase;

  max-width: 263px;
`;

//

export const StartContainer = styled.div`
  position: relative;

  z-index: 1;

  margin-top: -35px;

  display: flex;
  align-items: flex-end;
  gap: 50px;
`;

export const StyledNavLink = styled(RouterNavLink)`
  display: block;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.08px;

  padding: 16px;

  max-width: 156px;
  width: 100%;

  border-radius: 200px;
  background: #e44848;

  &:hover {
    background: #d84343;
  }
`;

export const MotivationText = styled.p`
  color: #475467;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 39.6px */
  letter-spacing: -1.8px;
  text-transform: uppercase;

  max-width: 467px;

  margin-bottom: 20px;
`;
