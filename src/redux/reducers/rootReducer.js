import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import userReducer from "./userReducer";
import consumerReducer from "./consumerReducer";
import policyReducer from "./policyReducer";

const rootReducer = combineReducers({
  users: userReducer,
  consumers: consumerReducer,
  policy: policyReducer,
  form: formReducer
});

export default rootReducer;
