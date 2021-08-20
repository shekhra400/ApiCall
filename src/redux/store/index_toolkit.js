import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { consumerSlice } from "../reducers/consumerSlice";
import { userSlice } from "../reducers/userSlice";

const store = configureStore(
  { reducer: { consumers: consumerSlice.reducer, users: userSlice.reducer } },
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
