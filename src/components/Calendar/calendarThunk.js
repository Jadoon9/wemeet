import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../api";

const headers = {
  "Content-Type": "application/json",
  // Authorization: "JWT fefege...",
};

// Get Events for calenders
export const getCalenderEvents = createAsyncThunk(
  "calender/getEvents",
  async () => {
    console.log("came after delete");
    try {
      const response = await request("GET", "/calendarData", null);
      return response?.data;
    } catch (error) {
      return error;
    }
  }
);

// Post new Event on calendar
export const postCalenderEvents = createAsyncThunk(
  "calender/postEvents",
  async (data) => {
    try {
      return await axios.post("http://localhost:3005/calendarData", data);
      // return await request("POST", "/calendarData", data);
    } catch (error) {
      return error;
    }
  }
);
// Post new Event on calendar
export const deleteCalenderEvents = createAsyncThunk(
  "calender/deleteEvents",
  async (id) => {
    try {
      await request("DELETE", `http://localhost:3005/calendarData/${id}`);
    } catch (error) {
      return error;
    }
  }
);
