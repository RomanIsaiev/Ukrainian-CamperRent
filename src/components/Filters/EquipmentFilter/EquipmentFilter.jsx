import { useState } from "react";
import {
  Box,
  Checkbox,
  FilterContainer,
  Icon,
  Label,
  Title,
} from "./EquipmentFilter.styled";
import sprite from "../../../assets/sprite.svg";

const initialEquipmentState = {
  airConditioner: false,
  automaticTransmission: false,
  kitchen: false,
  TV: false,
  bathroom: false,
};

const checkboxes = [
  { name: "airConditioner", label: "AC", icon: "ac" },
  { name: "automaticTransmission", label: "Automatic", icon: "trans" },
  { name: "kitchen", label: "Kitchen", icon: "kitchen" },
  { name: "TV", label: "TV", icon: "tv" },
  { name: "bathroom", label: "Shower/WC", icon: "shower" },
];

export const EquipmentFilter = ({ onFilterChange }) => {
  const [equipment, setEquipment] = useState(initialEquipmentState);

  const handleEquipmentChange = (e) => {
    const { name, checked } = e.target;
    setEquipment((prevEquipment) => ({ ...prevEquipment, [name]: checked }));

    const filterData =
      name === "bathroom" ? { bathroom: checked } : { [name]: checked };
    onFilterChange(filterData);
  };

  return (
    <div>
      <Title>Vehicle equipment</Title>
      <FilterContainer>
        {checkboxes.map((checkbox) => (
          <Label
            key={checkbox.name}
            className={equipment[checkbox.name] ? "activeFilter" : ""}
          >
            <Checkbox
              type="checkbox"
              name={checkbox.name}
              checked={equipment[checkbox.name]}
              onChange={handleEquipmentChange}
            />
            <Box>
              <Icon>
                <use href={`${sprite}#${checkbox.icon}`}></use>
              </Icon>
              <p>{checkbox.label}</p>
            </Box>
          </Label>
        ))}
      </FilterContainer>
    </div>
  );
};
