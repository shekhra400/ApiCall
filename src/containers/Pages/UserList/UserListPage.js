import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserList } from "../../../redux/actions/consumerAction";
import {
  selectUserListData,
  selectUserListIsLoading,
  selectUserListPageNo,
} from "../../../redux/selectors/consumer.selector";
import CircularProgress from "@material-ui/core/CircularProgress";
import classes from "./UserListPage.module.css";

const UserList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserList());
  }, [dispatch]);
  return (
    <div className={classes.main}>
      <h2>Information about Current Users</h2>
      {selectUserListIsLoading(state) && <CircularProgress size={70} />}
      {!selectUserListIsLoading(state) && selectUserListPageNo(state) && (
        <h3>Displayed Page No is : {selectUserListPageNo(state)}</h3>
      )}
      {console.log(selectUserListData(state))}
    </div>
  );
};
export default UserList;
