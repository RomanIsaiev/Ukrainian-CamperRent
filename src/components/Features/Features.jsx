import { FeaturesList } from "../FeaturesList/FeaturesList";
import { VehicleDetails } from "../VehicleDetails/VehicleDetails";

export const Features = ({ item }) => {
  return (
    <div>
      <div>
        <FeaturesList item={item} />
        <VehicleDetails item={item} />
      </div>
    </div>
  );
};
