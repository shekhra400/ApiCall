import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAILURE,
  USER_DETAIL_RESET,
} from "../actions/consumerAction";

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

const userReducer = (state = initialState, action) => {
  let updatedState;
  switch (action.type) {
    case USER_LIST_REQUEST:
      updatedState = {
        ...state,
        userIsLoading: true,
      };
      break;
    case USER_LIST_SUCCESS:
      updatedState = {
        ...state,
        userIsLoading: false,
        listData: { ...action.payload },
        page: action.payload.page,
      };
      break;
    case USER_LIST_FAILURE:
      updatedState = {
        ...state,
        userIsLoading: false,
        error: action.payload,
      };
      break;
    case USER_DETAIL_REQUEST:
      updatedState = {
        ...state,
        detailIsLoading: true,
      };
      break;
    case USER_DETAIL_SUCCESS:
      updatedState = {
        ...state,
        detailIsLoading: false,
        detailData: { ...action.payload.data },
      };
      break;
    case USER_DETAIL_FAILURE:
      updatedState = {
        ...state,
        detailIsLoading: false,
        error: action.payload,
      };
      break;
    case USER_DETAIL_RESET:
      updatedState = {
        ...state,
        detailIsLoading: true,
        detailData: {},
      };
      break;
    default:
      updatedState = state;
      break;
  }
  return updatedState;
};

export default userReducer;
