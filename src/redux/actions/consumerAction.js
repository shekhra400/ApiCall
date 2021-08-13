import axios from "axios";

import {
  API_BASE_PATH,
  CONSUMER_LIST_DEFAULT_PAGE,
} from "../../utils/constants";

export const USER_LIST_REQUEST = "USER_LIST_REQUEST";
export const USER_LIST_SUCCESS = "USER_LIST_SUCCESS";
export const USER_LIST_FAILURE = "USER_LIST_FAILURE";
export const USER_DETAIL_REQUEST = "USER_DETAIL_REQUEST";
export const USER_DETAIL_SUCCESS = "USER_DETAIL_SUCCESS";
export const USER_DETAIL_FAILURE = "USER_DETAIL_FAILURE";

export const loadUserList = (payload) => {
  const payloadConsumerApi = { ...CONSUMER_LIST_DEFAULT_PAGE, ...payload };
  const perPage = CONSUMER_LIST_DEFAULT_PAGE.per_page;
  return async (dispatch) => {
    dispatch(loadUserListRequest());
    axios
      .get(
        `${API_BASE_PATH}users?page=${payloadConsumerApi.page}&per_page=${perPage}&delay=1`
      )
      .then((res) => dispatch(loadUserListSuccess(res.data)))
      .catch((error) => dispatch(loadUserListError(error)));
  };
};

export const LoadUserDetail = (payload) => {
  const { id } = payload;
  return async (dispatch) => {
    dispatch(detailUserRequest());
    axios
      .get(`${API_BASE_PATH}users/${id}?delay=2`)
      .then((res) => dispatch(detailUserSuccess(res.data)))
      .catch((error) => dispatch(detailUserError(error.response.data)));
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

const detailUserRequest = () => ({
  type: USER_DETAIL_REQUEST,
});

const detailUserSuccess = (payload) => ({
  type: USER_DETAIL_SUCCESS,
  payload,
});

const detailUserError = (payload) => ({
  type: USER_DETAIL_FAILURE,
  payload,
});
