import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listData: {
    data: [],
  },
  detailData: {},
  userIsLoading: false,
  detailIsLoading: false,
  error: null,
  page: 1,
};

export const consumerSlice = createSlice({
  name: "consumers",
  initialState,
  reducers: {
    userListRequest(state) {
      state.userIsLoading = true;
    },
    userListSuccess(state, action) {
      state.userIsLoading = false;
      state.listData = { ...action.payload };
      state.page = action.payload.page;
    },
    userListFailure(state, action) {
      state.userIsLoading = false;
      state.error = action.payload;
    },
    userDetailRequest(state) {
      state.detailIsLoading = true;
    },
    userDetailSuccess(state, action) {
      state.detailIsLoading = false;
      state.detailData = { ...action.payload.data };
    },
    userDetailFailure(state, action) {
      state.detailIsLoading = false;
      state.error = action.payload;
    },
    userDetailReset(state) {
      state.detailIsLoading = true;
      state.detailData = {};
    },
  },
});

export const consumerActions = consumerSlice.actions;
