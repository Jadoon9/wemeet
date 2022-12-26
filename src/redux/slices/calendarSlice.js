import { createSlice } from "@reduxjs/toolkit";
import { getCalenderEvents } from "../../components/Calendar/actions";
export function createEventId() {
  return String(eventGuid++);
}
let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.data.push(action.payload);
    },
    getEvents: (state) => {
      return state;
    },
    removeEvent: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getCalenderEvents.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCalenderEvents.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(getCalenderEvents.error, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Error occured";
    });
  },
});

// this is for dispatch
export const { addEvent, removeEvent, getEvents } = calendarSlice.actions;

// this is for configureStore
export default calendarSlice.reducer;
