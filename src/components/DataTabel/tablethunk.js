import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api";
import request from "../../api";

const headers = {
  "Content-Type": "application/json",
  // Authorization: "JWT fefege...",
};

// Get Events for calenders
export const getTableData = createAsyncThunk("table/getTableData", async () => {
  try {
    const response = await api.get("/tableData", null);
    return response?.data;
  } catch (error) {
    return error;
  }
});

// Get Events for calenders
export const deleteUser = createAsyncThunk("table/deleteUser", async (id) => {
  try {
    const response = await api.delete(`/tableData/${id}`);
    // const response = await request("DELETE", "/tableData/");
    console.log(response, "daattaa");
    return response?.data;
  } catch (error) {
    return error;
  }
});
