import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    // removeData: (state, action) => {},
  },
});

// this is for dispatch
export const { addData, removeEvent } = formSlice.actions;

// this is for configureStore
export default formSlice.reducer;
