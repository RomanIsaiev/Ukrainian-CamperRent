import React, { useState } from "react";
import { Input, Label, Container, Icon } from "./LocationFilter.styled";
import sprite from "../../../assets/sprite.svg";

export const LocationFilter = ({ onFilterChange }) => {
  const [location, setLocation] = useState("");

  const handleFilterChange = (event) => {
    const newLocation = event.target.value;
    setLocation(newLocation);
    onFilterChange(newLocation);
  };

  return (
    <Container>
      <Label>
        Location
        <Input
          type="text"
          placeholder="Filter by location"
          value={location}
          onChange={handleFilterChange}
        />
        <Icon>
          <use href={`${sprite}#map-pin`} />
        </Icon>
      </Label>
    </Container>
  );
};
