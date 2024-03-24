import { useState } from "react";
import {
  Checkbox,
  FilterContainer,
  Icon,
  Label,
} from "./EquipmentFilter.styled";
import sprite from "../../../assets/sprite.svg";

export const EquipmentFilter = ({ onFilterChange }) => {
  const [equipment, setEquipment] = useState({
    airConditioner: false,
    automaticTransmission: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  });

  const handleEquipmentChange = (e) => {
    const { name, checked } = e.target;
    setEquipment((prevEquipment) => ({ ...prevEquipment, [name]: checked }));

    if (name === "bathroom") {
      onFilterChange({ bathroom: checked });
    } else {
      onFilterChange({ [name]: checked });
    }
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
        <Icon>
          <use href={`${sprite}#ac`}></use>
        </Icon>
        <p>AC</p>
      </Label>
      <Label>
        <Checkbox
          type="checkbox"
          name="automaticTransmission"
          checked={equipment.automaticTransmission}
          onChange={handleEquipmentChange}
        />
        <Icon>
          <use href={`${sprite}#trans`}></use>
        </Icon>
        <p>Automatic</p>
      </Label>
      <Label>
        <Checkbox
          type="checkbox"
          name="kitchen"
          checked={equipment.kitchen}
          onChange={handleEquipmentChange}
        />
        <Icon>
          <use href={`${sprite}#kitchen`}></use>
        </Icon>
        <p>Kitchen</p>
      </Label>
      <Label>
        <Checkbox
          type="checkbox"
          name="TV"
          checked={equipment.TV}
          onChange={handleEquipmentChange}
        />
        <Icon>
          <use href={`${sprite}#tv`}></use>
        </Icon>
        <p>TV</p>
      </Label>
      <Label>
        <Checkbox
          type="checkbox"
          name="bathroom"
          checked={equipment.bathroom}
          onChange={handleEquipmentChange}
        />
        <Icon>
          <use href={`${sprite}#shower`}></use>
        </Icon>
        <p>Bathroom</p>
      </Label>
    </FilterContainer>
  );
};
