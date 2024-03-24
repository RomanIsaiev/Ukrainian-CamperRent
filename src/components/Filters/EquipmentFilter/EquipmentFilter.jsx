import React from "react";

export const EquipmentFilter = ({ selectedEquipment, onFilterChange }) => {
  const handleChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <h3>Equipment</h3>
      <div>
        <input
          type="checkbox"
          id="ac"
          name="ac"
          value="AC"
          checked={selectedEquipment.includes("AC")}
          onChange={handleChange}
        />
        <label htmlFor="ac">AC</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="automatic"
          name="automatic"
          value="Automatic"
          checked={selectedEquipment.includes("Automatic")}
          onChange={handleChange}
        />
        <label htmlFor="automatic">Automatic</label>
      </div>
    </div>
  );
};
