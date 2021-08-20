import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  isLoading: false,
  error: null,
  token: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUserSuccess(state, action) {
      state.isLoading = false;
      state.list = [...action.payload];
    },
    addUserFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    authenticateUserRequest(state) {
      state.isLoading = true;
    },
    authenticateUserSuccess(state, action) {
      const authToken = action.payload.data.token;
      state.isLoading = false;
      state.token = authToken;
      state.isLoggedIn = !!authToken;
      if (authToken.length > 0) {
        localStorage.setItem("token", authToken);
      }
    },
    authenticateUserError(state, action) {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    userLogoutRequest(state) {
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    userToggleLogin(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});
export const userActions = userSlice.actions;
