import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ckEditorInput: "",
  reactQuilInput: "",
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setCkEditorInput: (state, action) => {
      state.ckEditorInput = action.payload;
    },
    setReactQuillInput: (state, action) => {
      state.reactQuilInput = action.payload;
    },
    // removeData: (state, action) => {},
  },
});

// this is for dispatch
export const { setCkEditorInput, setReactQuillInput } = editorSlice.actions;

// this is for configureStore
export default editorSlice.reducer;
