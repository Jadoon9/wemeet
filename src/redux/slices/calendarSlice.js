import { createSlice } from "@reduxjs/toolkit";
import {
  getCalenderEvents,
  postCalenderEvents,
} from "../../components/Calendar/calendrThunk";
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
    // addEvent: (state, action) => {
    //   state.data.push(action.payload);
    // },
    // getEvents: (state) => {
    //   return state;
    // },
    removeEvent: (state, action) => {},
  },
  extraReducers: (builder) => {
    // add new event
    builder.addCase(getCalenderEvents.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCalenderEvents.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload, "check");
      state.data = action.payload;
    });
    builder.addCase(getCalenderEvents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //  Post new Event
    builder.addCase(postCalenderEvents.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(postCalenderEvents.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload, "payloadd");
      state.data.push(action.payload);
    });
    builder.addCase(postCalenderEvents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// this is for dispatch
export const { addEvent, removeEvent, getEvents } = calendarSlice.actions;

// this is for configureStore
export default calendarSlice.reducer;
