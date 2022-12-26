import { createSlice } from "@reduxjs/toolkit";
export function createEventId() {
  return String(eventGuid++);
}
let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

const initialState = {
  loading: false,
  data: [
    {
      id: createEventId(),
      title: "All-day event",
      start: todayStr,
    },
    {
      id: createEventId(),
      title: "Timed event",
      start: todayStr + "T12:00:00",
    },
  ],
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
});

// this is for dispatch
export const { addEvent, removeEvent, getEvents } = calendarSlice.actions;

// this is for configureStore
export default calendarSlice.reducer;
