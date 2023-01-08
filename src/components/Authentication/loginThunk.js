import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../api";

const headers = {
  "Content-Type": "application/json",
  // Authorization: "JWT fefege...",
};

// GETT ALL THE USERS
export const getUsers = createAsyncThunk("users/data", async (data) => {
  try {
    const response = await axios.get("http://localhost:3005/authData");

    return response.data;
    // return await request("POST", "/calendarData", data);
  } catch (error) {
    return error;
  }
});

// // login userr
export const loginUser = createAsyncThunk("user/login", async (data) => {
  console.log(data, "dataaa");
  try {
    const response = await axios.get(
      `http://localhost:3005/authData/${data.email}`
    );
    console.log(response.data, "datttaaa");
    return response.data;
    // return await request("POST", "/calendarData", data);
  } catch (error) {
    return error;
  }
});
