import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../api";

const headers = {
  "Content-Type": "application/json",
  // Authorization: "JWT fefege...",
};

// Post new Event on calendar
export const registerUser = createAsyncThunk("register/user", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3005/users",
      JSON.stringify(data),
      {
        headers,
      }
    );

    return response.data;
    // return await request("POST", "/calendarData", data);
  } catch (error) {
    return error;
  }
});
