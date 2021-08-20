import axios from "axios";
import { API_BASE_PATH } from "../../utils/constants";

import { userActions } from "../reducers/userSlice";

export const loadUsers = () => {
  return async (dispatch) => {
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
        dispatch(userActions.addUserSuccess(loadedUsers));
      })
      .catch((err) => {
        dispatch(userActions.addUserFailure(err.message));
      });
  };

  //}
};

//login

export const authenticateUser = (email, pwd) => {
  return async (dispatch) => {
    dispatch(userActions.authenticateUserRequest());
    axios
      .post(`${API_BASE_PATH}login?delay=2`, {
        email: email,
        password: pwd,
      })
      .then((res) => dispatch(userActions.authenticateUserSuccess(res)))
      .catch((error) =>
        dispatch(userActions.authenticateUserError(error.response.data))
      );
  };
};

//logout

export const userLogout = () => {
  return async (dispatch) => {
    dispatch(userActions.userLogoutRequest());
  };
};

export const toggleLoginIn = (value) => {
  return async (dispatch) => {
    dispatch(userActions.userToggleLogin(value));
  };
};
