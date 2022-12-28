import { configureStore } from "@reduxjs/toolkit";
import calendarSlice, { addEvent, getEvents } from "./slices/calendarSlice";
import formSlice, { addData } from "./slices/formSlice";
import tableSlice from "./slices/tableSlice";

const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    form: formSlice,
    table: tableSlice,
  },
});

export { addData, addEvent, getEvents };
export default store;
