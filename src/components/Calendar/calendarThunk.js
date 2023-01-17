import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api";
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
      const response = await api.get("/calendarData", null);
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
      return await api.post("/calendarData", data);
    } catch (error) {
      return error;
    }
  }
);

// Post new Event on calendar
export const updateCalenderEvents = createAsyncThunk(
  "calender/updateEvents",
  async (data) => {
    console.log(data, "thunkkk");
    try {
      return await api.put(`/calendarData/${data.id}`, data.data);
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
      await api.delete(`/calendarData/${id}`);
    } catch (error) {
      return error;
    }
  }
);
