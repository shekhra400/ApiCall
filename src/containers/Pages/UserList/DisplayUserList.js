import classes from "./DisplayUserList.module.css";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { IconButton, TablePagination } from "@material-ui/core";
import { CONSUMER_LIST_DEFAULT_PAGE } from "../../../utils/constants";
//import { loadUserList } from "../../../redux/actions/consumerAction_toolkit";
import { loadUserList } from "../../../redux/actions/consumerAction";
import { useDispatch, useSelector } from "react-redux";
import UserDetailModal from "./ModalDetailPage";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
import { selectUserListIsLoading } from "../../../redux/selectors/consumer.selector";
import { stableSort, getComparator } from "../../../utils/common";
import TableComponent from "../../Table/TableComponent";

const DisplayUserList = props => {
  const state = useSelector(state => state);
  const loading = selectUserListIsLoading(state);

  const { list: rows, total } = props;
  const [page, setPage] = useState(null);
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [filterFn, setFilterFn] = useState({
    fn: items => {
      return items;
    }
  });
  const [currentUserId, setCurrentUserId] = useState(null);
  const rowsPerPage = CONSUMER_LIST_DEFAULT_PAGE.per_page;
  const pages = [1, 2, 3];
  const totalCount = total;

  const dispatch = useDispatch();

  useEffect(
    () => {
      if (page !== null) {
        dispatch(loadUserList({ page: page + 1 }));
      }
    },
    [dispatch, page]
  );

  const handleChangePage = (event, newPage) => {
    debugger;
    setPage(newPage);
  };

  const ListAfterPaginationAndFilter = () => {
    const sortedRecords = stableSort(rows, getComparator(order, orderBy));
    return filterFn.fn(sortedRecords);
  };

  const handleOpen = (event, id) => {
    setCurrentUserId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = e => {
    const target = e.target;
    debugger;
    setFilterFn({
      fn: items => {
        if (target.value === "") return items;
        else
          return items.filter(
            item =>
              item.first_name.toLowerCase().includes(target.value) ||
              item.last_name.toLowerCase().includes(target.value) ||
              item.email.toLowerCase().includes(target.value)
          );
      }
    });
  };

  const headCells = [
    { id: "id", label: "Id" },
    { id: "first_name", label: "FirstName" },
    { id: "last_name", label: "LastName" },
    { id: "email", label: "Email" }
  ];

  const handleSortRequest = cellId => {
    debugger;
    const isAsc = orderBy === cellId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(cellId);
  };
  return (
    <React.Fragment>
      {isEmpty(rows) && !loading && <h1> No Users Found</h1>}
      <div className={classes.textdiv}>
        <InputAdornment position="start">
          <TextField label="Search User" onChange={handleSearch} />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      </div>
      {!isEmpty(rows) && (
        <div className={classes.table}>
          <TableComponent
            handleSortRequest={handleSortRequest}
            handleOpen={handleOpen}
            orderBy={orderBy}
            order={order}
            headCells={headCells}
            ListAfterPaginationAndFilter={ListAfterPaginationAndFilter}
          />
          <TablePagination
            component="div"
            rowsPerPageOptions={pages}
            rowsPerPage={rowsPerPage}
            page={+page}
            count={totalCount}
            onChangePage={handleChangePage}
            // onChangeRowsPerPage={rowsPerPage}
          />
          {
            <UserDetailModal
              open={open}
              currentId={currentUserId}
              handleClose={handleClose}
            />
          }
        </div>
      )}
    </React.Fragment>
  );
};

export default DisplayUserList;
