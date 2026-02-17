import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

const memoizedTotalCost = createSelector(
  [(state) => state.cars.data, (state) => state.cars.searchTerm],
  (data, searchTerm) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return filteredCars.reduce((acc, car) => acc + car.cost, 0);
  },
);

const CarValue = () => {
  const totalCost = useSelector(memoizedTotalCost);

  return <div className="car-value">Total Cost: ${totalCost}</div>;
};

export default CarValue;
