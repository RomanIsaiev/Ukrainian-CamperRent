import { useLocation } from "react-router-dom";
import { Item, List, StyledNavLink } from "./HeaderNav.styled";

export const HeaderNav = () => {
  const location = useLocation();

  return (
    <List>
      <Item>
        <StyledNavLink to="/" active={location.pathname === "/"}>
          Home
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to="/catalog" active={location.pathname === "/catalog"}>
          Catalog
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink
          to="/favorites"
          active={location.pathname === "/favorites"}
        >
          Favorites
        </StyledNavLink>
      </Item>
    </List>
  );
};
