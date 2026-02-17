import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import {
  carsReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export {
  store,
  formReducer,
  changeName,
  changeCost,
  carsReducer,
  changeSearchTerm,
  addCar,
  removeCar,
};
