import { createSlice } from "@reduxjs/toolkit";
import {
  deleteUser,
  getTableData,
} from "../../components/DataTabel/tablethunk";
const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},

  // * Apiii Calls resultss
  extraReducers: {
    //* Get Users Data ====================================
    [getTableData.pending]: (state, action) => {
      state.loading = true;
    },

    [getTableData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    [getTableData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //* Delete User  ====================================
    [deleteUser.pending]: (state, action) => {
      state.loading = true;
    },

    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
    },

    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// this is for dispatch
// export const { addEvent, removeEvent, getEvents } = tableSlice.actions;

// this is for configureStore
export default tableSlice.reducer;
