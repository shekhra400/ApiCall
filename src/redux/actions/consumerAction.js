import axios from "axios";

import {
  API_BASE_PATH,
  CONSUMER_LIST_DEFAULT_PAGE,
} from "../../utils/constants";

export const USER_LIST_REQUEST = "USER_LIST_REQUEST";
export const USER_LIST_SUCCESS = "USER_LIST_SUCCESS";
export const USER_LIST_FAILURE = "USER_LIST_FAILURE";

export const loadUserList = (payload) => {
  const payloadConsumerApi = { ...CONSUMER_LIST_DEFAULT_PAGE, ...payload };
  return async (dispatch) => {
    dispatch(loadUserListRequest());
    axios
      .get(`${API_BASE_PATH}users?page=${payloadConsumerApi.page}&delay=5`)
      .then((res) => dispatch(loadUserListSuccess(res)))
      .catch((error) => dispatch(loadUserListError(error)));
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
