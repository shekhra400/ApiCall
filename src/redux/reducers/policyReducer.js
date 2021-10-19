import {
  CREATE_POLICY_REQUEST,
  CREATE_POLICY_SUCCESS,
  CREATE_POLICY_FAILURE,
  TOGGLE_POLICY_CREATED
} from "../actions/policyAction";

const initialState = {
  policyData: [],
  isLoading: false,
  error: null,
  isPolicyCreated: false
};

const policyReducer = (state = initialState, action) => {
  let updatedState;
  switch (action.type) {
    case CREATE_POLICY_REQUEST:
      updatedState = {
        ...state,
        isLoading: true
      };
      break;
    case CREATE_POLICY_SUCCESS:
      const policyList = [...state.policyData];
      policyList.push({ ...action.payload });
      updatedState = {
        ...state,
        policyData: policyList,
        isLoading: false,
        isPolicyCreated: true
      };
      break;
    case CREATE_POLICY_FAILURE:
      updatedState = {
        ...state,
        isLoading: false,
        isPolicyCreated: false,
        error: action.payload.error
      };
      break;
    case TOGGLE_POLICY_CREATED:
      updatedState = {
        ...state,
        isPolicyCreated: action.payload
      };
      break;
    default:
      updatedState = state;
      break;
  }
  return updatedState;
};

export default policyReducer;
