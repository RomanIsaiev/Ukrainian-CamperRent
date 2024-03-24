import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  max-width: 1440px;
  margin: 0 auto;
  padding-left: 64px;
  padding-right: 64px;
`;

export const Item = styled.li``;

export const StyledNavLink = styled(RouterNavLink)`
  color: ${(props) => (props.active ? "#fff" : "#101828")};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;

  padding: 16px 32px;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);

  background-color: ${(props) => (props.active ? "#D84343" : "transparent")};

  &:hover {
    border: 1px solid #e44848;
  }
`;
