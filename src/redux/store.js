import { configureStore } from "@reduxjs/toolkit";
import calendarSlice, { addEvent, getEvents } from "./slices/calendarSlice";
import formSlice, { addData } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    form: formSlice,
  },
});

export { addData, addEvent, getEvents };
export default store;
