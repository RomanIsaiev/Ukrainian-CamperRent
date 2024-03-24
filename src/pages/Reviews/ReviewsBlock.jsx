import { useOutletContext } from "react-router-dom";
import { ReviewsList } from "../../components/Reviews/ReviewsList/ReviewsList";

export default function ReviewsBlock() {
  const item = useOutletContext();
  return (
    <>
      <div>
        <ReviewsList item={item} />
      </div>
    </>
  );
}
