import { createSelector } from "reselect";

const selectUser = (state) => state.users;

export const selectUserIsLoggedIn = createSelector(
  [selectUser],
  (user) => user.isLoggedIn
);

export const selectUserIsLoading = createSelector(
  [selectUser],
  (user) => user.isLoading
);

export const selectUserIsError = createSelector(
  [selectUser],
  (user) => user.error
);
