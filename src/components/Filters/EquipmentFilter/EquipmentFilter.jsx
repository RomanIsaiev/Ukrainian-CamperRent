import { useState } from "react";
import { Checkbox, FilterContainer, Label } from "./EquipmentFilter.styled";

export const EquipmentFilter = ({ onFilterChange }) => {
  const [equipment, setEquipment] = useState({
    airConditioner: false,
    automaticTransmission: false,
    kitchen: false,
    TV: false,
    shower: false,
    toilet: false,
  });

  const handleEquipmentChange = (e) => {
    const { name, checked } = e.target;
    setEquipment((prevEquipment) => ({ ...prevEquipment, [name]: checked }));
    onFilterChange({ [name]: checked });
  };

  return (
    <FilterContainer>
      <Label>
        <Checkbox
          type="checkbox"
          name="airConditioner"
          checked={equipment.airConditioner}
          onChange={handleEquipmentChange}
        />
        Air Conditioner
      </Label>
      <Label>
        <Checkbox
          type="checkbox"
          name="automaticTransmission"
          checked={equipment.automaticTransmission}
          onChange={handleEquipmentChange}
        />
        Automatic Transmission
      </Label>
      <Label>
        <Checkbox
          type="checkbox"
          name="kitchen"
          checked={equipment.kitchen}
          onChange={handleEquipmentChange}
        />
        Kitchen
      </Label>
      <Label>
        <Checkbox
          type="checkbox"
          name="TV"
          checked={equipment.TV}
          onChange={handleEquipmentChange}
        />
        TV
      </Label>
      <Label>
        <Checkbox
          type="checkbox"
          name="shower"
          checked={equipment.shower}
          onChange={handleEquipmentChange}
        />
        Shower
      </Label>
      <Label>
        <Checkbox
          type="checkbox"
          name="toilet"
          checked={equipment.toilet}
          onChange={handleEquipmentChange}
        />
        Toilet
      </Label>
    </FilterContainer>
  );
};
