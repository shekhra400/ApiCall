import { createSelector } from "reselect";

const selectConsumers = (state) => state.consumers;
const selectUserList = (state) => state.consumers.list;

export const selectUserListData = createSelector(
  [selectUserList],
  (listData) => listData.data
);

export const selectUserListIsLoading = createSelector(
  [selectConsumers],
  (userList) => userList.isLoading
);

export const selectUserListPageNo = createSelector(
  [selectConsumers],
  (listPageNo) => listPageNo.page
);
