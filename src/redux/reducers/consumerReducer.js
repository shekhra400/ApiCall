import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
} from "../actions/consumerAction";

const initialState = {
  listData: {
    data: [],
  },
  isLoading: false,
  error: null,
  page: 1,
};

const userReducer = (state = initialState, action) => {
  let updatedState;
  switch (action.type) {
    case USER_LIST_REQUEST:
      updatedState = {
        ...state,
        isLoading: true,
      };
      break;
    case USER_LIST_SUCCESS:
      updatedState = {
        ...state,
        isLoading: false,
        listData: { ...action.payload },
        page: action.payload.page,
      };
      break;
    case USER_LIST_FAILURE:
      updatedState = {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      break;
    default:
      updatedState = state;
      break;
  }
  return updatedState;
};

export default userReducer;
