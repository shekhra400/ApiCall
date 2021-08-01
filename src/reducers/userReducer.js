import {
  LOAD_USERS,
  LOAD_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGIN_TOGGLE,
} from "../actions/userAction";

const initialState = {
  list: [],
  isLoading: false,
  error: null,
  token: "",
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  let updatedState;
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      updatedState = {
        ...state,
        isLoading: true,
      };
      break;
    case USER_LOGIN_SUCCESS:
      const authToken = action.payload.data.token;
      updatedState = {
        ...state,
        isLoading: false,
        token: authToken,
        isLoggedIn: !!authToken,
      };
      if (authToken.length > 0) {
        localStorage.setItem("token", authToken);
      }

      break;
    case USER_LOGIN_FAILURE:
      updatedState = {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
      break;
    case USER_LOGOUT_REQUEST:
      updatedState = {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      };
      localStorage.removeItem("token");
      break;
    case LOAD_USERS:
      updatedState = {
        ...state,
        isLoading: false,
        list: [...action.payload],
      };
      break;
    case USER_LOGIN_TOGGLE:
      updatedState = {
        ...state,
        isLoggedIn: action.payload,
      };
      break;
    case LOAD_ERROR:
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
