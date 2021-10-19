import axios from "axios";

import { API_BASE_PATH } from "../../utils/constants";

export const CREATE_POLICY_REQUEST = "CREATE_POLICY_REQUEST";
export const CREATE_POLICY_SUCCESS = "CREATE_POLICY_SUCCESS";
export const CREATE_POLICY_FAILURE = "CREATE_POLICY_FAILURE";
export const TOGGLE_POLICY_CREATED = "TOGGLE_POLICY_CREATED";

// create Policy
export const createPolicy = (name, policy, dob) => {
  return async dispatch => {
    dispatch(createPolicyRequest());
    axios
      .post(`${API_BASE_PATH}users`, {
        name: name,
        policy: policy,
        dob: dob
      })
      .then(res => dispatch(createPolicySuccess(res.data)))
      .catch(error => dispatch(createPolicyError(error)));
  };
};

export const createPolicyRequest = () => ({
  type: CREATE_POLICY_REQUEST
});

export const togglePolicyCreated = payload => ({
  type: TOGGLE_POLICY_CREATED,
  payload
});

export const createPolicySuccess = payload => ({
  type: CREATE_POLICY_SUCCESS,
  payload
});

export const createPolicyError = payload => ({
  type: CREATE_POLICY_FAILURE,
  payload
});
