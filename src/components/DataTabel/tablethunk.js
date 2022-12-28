import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  // Authorization: "JWT fefege...",
};

// Get Events for calenders
export const getTableData = createAsyncThunk("table/getTableData", async () => {
  try {
    const response = await axios.get(" http://localhost:3005/tableData");
    return response?.data;
  } catch (error) {
    return error;
  }
});
