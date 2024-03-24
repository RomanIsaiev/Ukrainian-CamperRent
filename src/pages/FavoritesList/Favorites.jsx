import { FavoritesList } from "../../components/Favorites/FavoritesList";
import { FavoritesListContainer } from "./FavoritesList.styled";

export default function Favorite() {
  return (
    <>
      <FavoritesListContainer>
        <FavoritesList />
      </FavoritesListContainer>
    </>
  );
}
