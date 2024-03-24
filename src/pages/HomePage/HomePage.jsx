import { Welcome } from "../../components/Welcome/Welcome.jsx";
import { HomePageContainer } from "./HomePage.styled.js";

export default function HomePage() {
  return (
    <HomePageContainer>
      <Welcome />
    </HomePageContainer>
  );
}
