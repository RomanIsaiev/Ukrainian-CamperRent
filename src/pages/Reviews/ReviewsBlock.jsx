import { useOutletContext } from "react-router-dom";
import { ReviewsList } from "../../components/Reviews/ReviewsList/ReviewsList";
import { BookingForm } from "../../components/BookingForm/BookingForm";
import {
  Container,
  MainContainer,
} from "../../components/Features/Features.styled";

export default function ReviewsBlock() {
  const item = useOutletContext();
  return (
    <MainContainer>
      <Container>
        <div>
          <ReviewsList item={item} />
        </div>
        <div>
          <BookingForm />
        </div>
      </Container>
    </MainContainer>
  );
}
