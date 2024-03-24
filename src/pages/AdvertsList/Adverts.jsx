import { AdvertsList } from "../../components/AdvertsList/AdvertsList";
import { Filters } from "../../components/Filters/Filters";
import { AdvertsContainer } from "./Adverts.styled";

export default function Adverts() {
  return (
    <>
      <AdvertsContainer>
        <AdvertsList />
      </AdvertsContainer>
    </>
  );
}
