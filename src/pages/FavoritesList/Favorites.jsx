import { FavoritesList } from "../../components/Favorites/FavoritesList";
import { FavoritesListContainer } from "./FavoritesList.styled";

export default function Favorites() {
  return (
    <>
      <FavoritesListContainer>
        <FavoritesList />
      </FavoritesListContainer>
    </>
  );
}
