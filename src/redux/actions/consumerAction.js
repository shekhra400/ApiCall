import axios from "axios";

import { API_BASE_PATH } from "../../utils/constants";

export const USER_LIST_REQUEST = "USER_LIST_REQUEST";
export const USER_LIST_SUCCESS = "USER_LIST_SUCCESS";
export const USER_LIST_FAILURE = "USER_LIST_FAILURE";

export const loadUserList = () => {
  return async (dispatch) => {
    dispatch(loadUserListRequest());
    axios
      .get(`${API_BASE_PATH}users?page=2?delay=3`)
      .then((res) => dispatch(loadUserListSuccess(res)))
      .catch((error) => dispatch(loadUserListError(error.response.data)));
  };
};

const loadUserListRequest = () => ({
  type: USER_LIST_REQUEST,
});

const loadUserListSuccess = (payload) => ({
  type: USER_LIST_SUCCESS,
  payload,
});

const loadUserListError = (payload) => ({
  type: USER_LIST_FAILURE,
});
