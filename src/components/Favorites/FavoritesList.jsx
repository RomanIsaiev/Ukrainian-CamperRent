import React, { useEffect, useState } from "react";
import { AdvertsItem } from "../AdvertsItem/AdvertsItem";
import { useDispatch, useSelector } from "react-redux";
import { initializeFavorites } from "../../redux/adverts/favoriteSlice";
import { Filters, List, SeacrhButton } from "../AdvertsList/AdvertsList.styled";
import { MainContainer } from "./FavoritesList.styled";
import { LocationFilter } from "../Filters/LocationFilter/LocationFilter";
import { EquipmentFilter } from "../Filters/EquipmentFilter/EquipmentFilter";
import { VehicleTypeFilter } from "../Filters/VehicleTypeFilter/VehicleTypeFilter";

export const FavoritesList = () => {
  const dispatch = useDispatch();
  const favoriteAdverts = useSelector((state) => state.favorites.items);
  const [locationFilter, setLocationFilter] = useState("");
  const [equipmentFilter, setEquipmentFilter] = useState({
    airConditioner: false,
    automaticTransmission: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  });
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState("");
  const [filteredFavorites, setFilteredFavorites] = useState([]);

  useEffect(() => {
    dispatch(initializeFavorites());
  }, [dispatch]);

  useEffect(() => {
    setFilteredFavorites(favoriteAdverts);
  }, [favoriteAdverts]);

  const handleSearch = () => {
    const filteredList = favoriteAdverts.filter((advert) => {
      const locationMatch = locationFilter
        ? advert.location.toLowerCase().includes(locationFilter.toLowerCase())
        : true;

      const airConditionerMatch = equipmentFilter.airConditioner
        ? advert.details.airConditioner > 0
        : true;

      const automaticTransmissionMatch = equipmentFilter.automaticTransmission
        ? advert.transmission === "automatic"
        : true;

      const kitchenMatch = equipmentFilter.kitchen
        ? advert.details.kitchen > 0
        : true;

      const TVMatch = equipmentFilter.TV ? advert.details.TV > 0 : true;

      const bathroomMatch = equipmentFilter.bathroom
        ? advert.details.bathroom > 0
        : true;

      const vehicleTypeMatch = vehicleTypeFilter
        ? advert.form === vehicleTypeFilter
        : true;

      return (
        locationMatch &&
        airConditionerMatch &&
        automaticTransmissionMatch &&
        kitchenMatch &&
        TVMatch &&
        bathroomMatch &&
        vehicleTypeMatch
      );
    });
    setFilteredFavorites(filteredList);
  };

  const handleLocationFilterChange = (newLocation) => {
    setLocationFilter(newLocation);
  };

  const handleEquipmentFilterChange = (newEquipment) => {
    setEquipmentFilter((prevFilter) => ({ ...prevFilter, ...newEquipment }));
  };

  const handleVehicleTypeFilterChange = (newVehicleType) => {
    setVehicleTypeFilter(newVehicleType);
  };

  return (
    <MainContainer>
      <div>
        <LocationFilter onFilterChange={handleLocationFilterChange} />
        <Filters>Filters</Filters>
        <EquipmentFilter onFilterChange={handleEquipmentFilterChange} />
        <VehicleTypeFilter
          selectedVehicleType={vehicleTypeFilter}
          onFilterChange={handleVehicleTypeFilterChange}
        />
        <SeacrhButton onClick={handleSearch}>Search</SeacrhButton>
      </div>
      <div>
        <List>
          {filteredFavorites.map((advert) => (
            <AdvertsItem key={advert._id} item={advert} />
          ))}
        </List>
      </div>
    </MainContainer>
  );
};
