import { createSlice } from "@reduxjs/toolkit";
import { getTableData } from "../../components/DataTabel/tablethunk";
const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const calendarSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // add new event
    builder.addCase(getTableData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getTableData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getTableData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// this is for dispatch
// export const { addEvent, removeEvent, getEvents } = calendarSlice.actions;

// this is for configureStore
export default calendarSlice.reducer;
