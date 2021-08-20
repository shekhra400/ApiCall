import axios from "axios";
import { consumerActions } from "../reducers/consumerSlice";

import {
  API_BASE_PATH,
  CONSUMER_LIST_DEFAULT_PAGE,
} from "../../utils/constants";

export const loadUserList = (payload) => {
  const payloadConsumerApi = { ...CONSUMER_LIST_DEFAULT_PAGE, ...payload };
  const perPage = CONSUMER_LIST_DEFAULT_PAGE.per_page;
  return async (dispatch) => {
    dispatch(consumerActions.userListRequest());
    axios
      .get(
        `${API_BASE_PATH}users?page=${payloadConsumerApi.page}&per_page=${perPage}&delay=1`
      )
      .then((res) => dispatch(consumerActions.userListSuccess(res.data)))
      .catch((error) => dispatch(consumerActions.userListError(error)));
  };
};

export const LoadUserDetail = (payload) => {
  const { id } = payload;
  return async (dispatch) => {
    dispatch(consumerActions.userDetailRequest());
    axios
      .get(`${API_BASE_PATH}users/${id}?delay=2`)
      .then((res) => dispatch(consumerActions.userDetailSuccess(res.data)))
      .catch((error) =>
        dispatch(consumerActions.userDetailError(error.response.data))
      );
  };
};

export const resetDetailState = () => {
  return async (dispatch) => {
    dispatch(consumerActions.userDetailReset);
  };
};
