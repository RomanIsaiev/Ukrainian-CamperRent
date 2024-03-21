import { NavLink } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="catalog">Catalog</NavLink>
      </li>
      <li>
        <NavLink to="favorites">Favorites</NavLink>
      </li>
    </ul>
  );
};
