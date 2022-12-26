import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCalenderEvents = createAsyncThunk(
  "calender/getEvents",
  async () => {
    const response = await fetch(" http://localhost:3005/calendarData");
    console.log(response.json());
  }
);
