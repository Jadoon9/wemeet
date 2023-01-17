import { createSlice } from "@reduxjs/toolkit";
import {
  getCalenderEvents,
  postCalenderEvents,
  deleteCalenderEvents,
  updateCalenderEvents,
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

  // * Apiii Calls resultss
  extraReducers: {
    //* add new event ====================================
    [getCalenderEvents.pending]: (state, action) => {
      state.loading = true;
    },

    [getCalenderEvents.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload, "check");
      state.data = action.payload;
    },

    [getCalenderEvents.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //* Post new Event ====================================
    [postCalenderEvents.pending]: (state, action) => {
      state.loading = true;
    },

    [postCalenderEvents.fulfilled]: (state, action) => {
      state.loading = false;
      const { data } = action.payload;
      console.log(data, "dattaacheckk");
      state.data.push(data);
    },

    [postCalenderEvents.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //* Post new Event ====================================
    [postCalenderEvents.pending]: (state, action) => {
      state.loading = true;
    },

    [postCalenderEvents.fulfilled]: (state, action) => {
      state.loading = false;
      const { data } = action.payload;
      console.log(data, "dattaacheckk");
      state.data.push(data);
    },

    [postCalenderEvents.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //*  Update an Event====================================
    [updateCalenderEvents.pending]: (state, action) => {
      state.loading = true;
    },

    [updateCalenderEvents.fulfilled]: (state, action) => {
      state.loading = false;
      const { data } = action.payload;
      console.log(data, "dattaacheckk");
      // state.data.push(data);
    },

    [updateCalenderEvents.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //* Delete  Event====================================
    [deleteCalenderEvents.pending]: (state, action) => {
      state.loading = true;
    },

    [deleteCalenderEvents.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    [deleteCalenderEvents.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
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
