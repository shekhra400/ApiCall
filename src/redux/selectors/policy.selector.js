import { createSelector } from "reselect";

const selectPolicy = state => state.policy;

export const selectPolicyDataIsLoading = createSelector(
  [selectPolicy],
  policy => policy.isLoading
);

export const selectIsPolicyCreated = createSelector(
  [selectPolicy],
  policy => policy.isPolicyCreated
);

export const selectPolicyDataIsError = createSelector(
  [selectPolicy],
  policy => policy.error
);

export const selectPolicyData = createSelector(
  [selectPolicy],
  policy => policy.policyData
);
