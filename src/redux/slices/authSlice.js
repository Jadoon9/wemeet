import { createSlice } from "@reduxjs/toolkit";
import {
  getUsers,
  loginUser,
} from "../../components/Authentication/loginThunk";
import { registerUser } from "../../components/Authentication/registerThunk";
import {
  getCalenderEvents,
  postCalenderEvents,
  deleteCalenderEvents,
} from "../../components/Calendar/calendarThunk";
export function createEventId() {
  return String(eventGuid++);
}
let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

const initialState = {
  isLoggedIn: false,
  loggedInUser: null,
  loading: false,
  users: [],
  error: null,
};

export const authSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},

  // * Apiii Calls resultss
  extraReducers: {
    //* Users Data
    [getUsers.pending]: (state, action) => {
      state.loading = true;
    },

    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.isLoggedIn = false;
    },

    [getUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //* User registeraion
    [registerUser.pending]: (state, action) => {
      state.loading = true;
    },

    [registerUser.fulfilled]: (state, action) => {
      state.users.forEach((user) => {
        if (user.email === action.payload.email) {
          state.loading = false;
          state.error = "User already exist";
          state.isLoggedIn = false;
          state.loggedInUser = null;
        } else {
          state.loading = false;
          state.isLoggedIn = true;
          state.loggedInUser = action.payload;
          state.error = null;
        }
      });
    },

    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //* User Loginn
    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },

    [loginUser.fulfilled]: (state, action) => {
      console.log(action.payload, "checkkk");
      state.loading = false;
      state.error = null;
      state.isLoggedIn = true;
      state.loggedInUser = action.payload;
    },

    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// this is for dispatch

// this is for configureStore
export default authSlice.reducer;
