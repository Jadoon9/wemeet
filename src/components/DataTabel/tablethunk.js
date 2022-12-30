import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../api";

const headers = {
  "Content-Type": "application/json",
  // Authorization: "JWT fefege...",
};

// Get Events for calenders
export const getTableData = createAsyncThunk("table/getTableData", async () => {
  try {
    const response = await request("GET", "/tableData", null);
    return response?.data;
  } catch (error) {
    return error;
  }
});
