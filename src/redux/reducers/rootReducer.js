import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import userReducer from "./userReducer";
import consumerReducer from "./consumerReducer";

const rootReducer = combineReducers({
  users: userReducer,
  consumers: consumerReducer,
  form: formReducer,
});

export default rootReducer;
