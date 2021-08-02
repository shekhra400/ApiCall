import axios from "axios";

import { API_BASE_PATH } from "../../utils/constants";
export const LOAD_USERS = "LOAD_USERS";
export const LOAD_ERROR = "LOAD_ERROR";
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST";
export const USER_LOGIN_TOGGLE = "USER_LOGIN_TOGGLE";

export const loadUsers = () => {
  return async (dispatch) => {
    // const loadUserList = async() => {
    //dispatch(addUserStarted(true))

    /*  const response = await fetch('https://loadusers-default-rtdb.firebaseio.com/user.json');
               const responseData = await response.json();
          
               const loadedUsers = [];
          
               for ( const key in responseData){
          
                 loadedUsers.push({
                   id: key,
                   name : responseData[key].name
                 })
               }
               dispatch(addUserSuccess(loadedUsers)) */

    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const loadedUsers = [];

        for (const key in res.data) {
          loadedUsers.push({
            id: key,
            name: res.data[key].name,
          });
        }
        dispatch(addUserSuccess(loadedUsers));
      })
      .catch((err) => {
        dispatch(addUserFailure(err.message));
      });
  };

  //}
};

//login

export const authenticateUser = (email, pwd) => {
  return async (dispatch) => {
    dispatch(authenticateUserRequest());
    axios
      .post(`${API_BASE_PATH}login?delay=2`, {
        email: email,
        password: pwd,
      })
      .then((res) => dispatch(authenticateUserSuccess(res)))
      .catch((error) => dispatch(authenticateUserError(error.response.data)));
  };
};

//logout

export const userLogout = () => {
  return async (dispatch) => {
    dispatch(userLogoutRequest());
  };
};

export const toggleLoginIn = (value) => {
  return async (dispatch) => {
    dispatch(userToggleLogin(value));
  };
};

const userLogoutRequest = () => ({
  type: USER_LOGOUT_REQUEST,
});

const userToggleLogin = (payload) => ({
  type: USER_LOGIN_TOGGLE,
  payload,
});

const authenticateUserRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

const authenticateUserSuccess = (payload) => ({
  type: USER_LOGIN_SUCCESS,
  payload,
});

const authenticateUserError = (payload) => ({
  type: USER_LOGIN_FAILURE,
  payload,
});

const addUserSuccess = (payload) => ({
  type: LOAD_USERS,
  payload,
});

const addUserFailure = (payload) => ({
  type: LOAD_ERROR,
  payload,
});
