import { NavLink } from "react-router-dom";
import { Item, List } from "./HeaderNav.styled";

export const HeaderNav = () => {
  return (
    <List>
      <Item>
        <NavLink to="/">Home</NavLink>
      </Item>
      <Item>
        <NavLink to="catalog">Catalog</NavLink>
      </Item>
      <Item>
        <NavLink to="favorites">Favorites</NavLink>
      </Item>
    </List>
  );
};
