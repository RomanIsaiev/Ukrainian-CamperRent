import { BookingForm } from "../BookingForm/BookingForm";
import { FeaturesList } from "../FeaturesList/FeaturesList";
import { VehicleDetails } from "../VehicleDetails/VehicleDetails";
import { Container, MainContainer } from "./Features.styled";

export const Features = ({ item }) => {
  return (
    <MainContainer>
      <Container>
        <div>
          <FeaturesList item={item} />
          <VehicleDetails item={item} />
        </div>
        <div>
          <BookingForm />
        </div>
      </Container>
    </MainContainer>
  );
};
