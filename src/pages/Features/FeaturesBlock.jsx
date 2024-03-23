import { useOutletContext } from "react-router-dom";
import { Features } from "../../components/Features/Features";

export default function FeaturesBlock() {
  const item = useOutletContext();
  return (
    <>
      <div>
        <Features item={item} />
      </div>
    </>
  );
}
