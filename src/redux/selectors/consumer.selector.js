import { createSelector } from "reselect";

const selectConsumers = (state) => state.consumers;

export const selectUserListData = createSelector(
  [selectConsumers],
  (data) => data.listData.data
);

export const selectUserListTotal = createSelector(
  [selectConsumers],
  (data) => data.listData.total
);

export const selectUserListIsLoading = createSelector(
  [selectConsumers],
  (userList) => userList.isLoading
);

export const selectUserDetailIsLoading = createSelector(
  [selectConsumers],
  (userList) => userList.detailIsLoading
);

export const selectUserListPageNo = createSelector(
  [selectConsumers],
  (listPageNo) => listPageNo.listData.data.page
);

export const selectUserData = createSelector(
  [selectConsumers],
  (data) => data.detailData
);
