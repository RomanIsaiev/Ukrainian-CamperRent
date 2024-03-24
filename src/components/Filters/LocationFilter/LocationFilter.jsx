import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const LocationFilter = ({ onFilterChange }) => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const newLocation = event.target.value;
    setLocation(newLocation);
    onFilterChange(newLocation);
  };

  return (
    <input
      type="text"
      placeholder="Filter by location"
      value={location}
      onChange={handleFilterChange}
    />
  );
};
