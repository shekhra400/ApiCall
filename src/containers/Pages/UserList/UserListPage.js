import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserList } from "../../../redux/actions/consumerAction";
import DisplayUserList from "./DisplayUserList";
import classes from "./UserListPage.module.css";
import { isEmpty } from "lodash";
import {
  selectUserListData,
  selectUserListTotal,
  selectUserListIsLoading,
  selectUserListPageNo,
} from "../../../redux/selectors/consumer.selector";
import CircularProgress from "@material-ui/core/CircularProgress";

const UserList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const userListData = selectUserListData(state);
  const total = selectUserListTotal(state);
  //use material ui grid to create seperate column

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
      {!isEmpty(userListData) && (
        <DisplayUserList list={userListData} total={total} />
      )}
    </div>
  );
};
export default UserList;
