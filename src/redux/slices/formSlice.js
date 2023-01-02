import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.formData = action.payload;
    },
    // removeData: (state, action) => {},
  },
});

// this is for dispatch
export const { addFormData } = formSlice.actions;

// this is for configureStore
export default formSlice.reducer;
