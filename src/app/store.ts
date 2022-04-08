import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./features/reservationSlices"
import custmerReducer from "./features/custmerSlice";


export const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    customers: custmerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
