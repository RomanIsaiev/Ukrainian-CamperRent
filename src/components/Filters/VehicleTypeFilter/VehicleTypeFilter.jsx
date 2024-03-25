import React from "react";
import {
  Box,
  FilterContainer,
  Icon,
  Label,
  Radio,
  Title,
  Text,
} from "../VehicleTypeFilter/VehicleTypeFilter.styled";
import sprite from "../../../assets/sprite.svg";

const vehicleTypes = [
  { name: "panelTruck", label: "Van", icon: "van" },
  {
    name: "fullyIntegrated",
    label: "Fully Integrated",
    icon: "fully",
  },
  { name: "alcove", label: "Alcove", icon: "alcove" },
];

export const VehicleTypeFilter = ({ onFilterChange, selectedVehicleType }) => {
  const handleVehicleTypeChange = (e) => {
    const { value } = e.target;
    onFilterChange(value);
  };

  return (
    <div>
      <Title>Vehicle Type</Title>
      <FilterContainer>
        <Label className={selectedVehicleType === "" ? "activeFilter" : ""}>
          <Radio
            type="radio"
            name="vehicleType"
            value=""
            checked={selectedVehicleType === ""}
            onChange={handleVehicleTypeChange}
          />
          <Box>
            <Icon>
              <use href={`${sprite}#filter-star`}></use>
            </Icon>
            <Text>All</Text>
          </Box>
        </Label>
        {vehicleTypes.map((type) => (
          <Label
            key={type.name}
            className={selectedVehicleType === type.name ? "activeFilter" : ""}
          >
            <Radio
              type="radio"
              name="vehicleType"
              value={type.name}
              checked={selectedVehicleType === type.name}
              onChange={handleVehicleTypeChange}
            />
            <Box>
              <Icon>
                <use href={`${sprite}#${type.icon}`}></use>
              </Icon>
              <Text>{type.label}</Text>
            </Box>
          </Label>
        ))}
      </FilterContainer>
    </div>
  );
};
