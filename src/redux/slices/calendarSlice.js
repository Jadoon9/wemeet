import { createSlice } from "@reduxjs/toolkit";
import {
  getCalenderEvents,
  postCalenderEvents,
  deleteCalenderEvents,
} from "../../components/Calendar/calendarThunk";
export function createEventId() {
  return String(eventGuid++);
}
let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

const initialState = {
  selectedEvent: null,
  loading: false,
  data: [],
  error: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
    removeSelectedEvent: (state) => {
      state.selectedEvent = null;
    },
    // addEvent: (state, action) => {
    //   state.data.push(action.payload);
    // },
    // getEvents: (state) => {
    //   return state;
    // },
  },

  // * Apiii Call reducersss
  extraReducers: (builder) => {
    //* add new event
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

    //*  Post new Event
    builder.addCase(postCalenderEvents.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(postCalenderEvents.fulfilled, (state, action) => {
      state.loading = false;
      const { data } = action.payload;
      state.data.push(data);
    });
    builder.addCase(postCalenderEvents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //*  Delete  Event
    builder.addCase(deleteCalenderEvents.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteCalenderEvents.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(deleteCalenderEvents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// this is for dispatch
export const {
  addEvent,
  removeEvent,
  getEvents,
  addSelectedEvent,
  removeSelectedEvent,
} = calendarSlice.actions;

// this is for configureStore
export default calendarSlice.reducer;
