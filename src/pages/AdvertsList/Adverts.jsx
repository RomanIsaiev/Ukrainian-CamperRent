import { AdvertsList } from "../../components/AdvertsList/AdvertsList";
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
