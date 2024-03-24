import React, { useState } from "react";

export const LocationFilter = ({ onFilterChange }) => {
  const [location, setLocation] = useState("");

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
