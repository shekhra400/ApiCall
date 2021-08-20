import classes from "./DisplayUserList.module.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { IconButton, TablePagination, TableSortLabel } from "@material-ui/core";
import { CONSUMER_LIST_DEFAULT_PAGE } from "../../../utils/constants";
import { loadUserList } from "../../../redux/actions/consumerAction_toolkit";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserDetailModal from "./ModalDetailPage";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
import { selectUserListIsLoading } from "../../../redux/selectors/consumer.selector";
import { stableSort, getComparator } from "../../../utils/common";
//import ModalPage from "../../../Modal/ModalPage";

const DisplayUserList = (props) => {
  const state = useSelector((state) => state);
  const loading = selectUserListIsLoading(state);

  const { list: rows, total } = props;
  const [page, setPage] = useState(null);
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [currentUserId, setCurrentUserId] = useState(null);
  const rowsPerPage = CONSUMER_LIST_DEFAULT_PAGE.per_page;
  const pages = [1, 2, 3];
  const totalCount = total;

  const dispatch = useDispatch();

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
    textfield: {},
  }))(TableCell);

  useEffect(() => {
    if (page !== null) {
      dispatch(loadUserList({ page: page + 1 }));
    }
  }, [dispatch, page]);

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

  const handleSearch = (e) => {
    const target = e.target;
    debugger;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter(
            (item) =>
              item.first_name.toLowerCase().includes(target.value) ||
              item.last_name.toLowerCase().includes(target.value) ||
              item.email.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const headCells = [
    { id: "id", label: "Id" },
    { id: "first_name", label: "FirstName" },
    { id: "last_name", label: "LastName" },
    { id: "email", label: "Email" },
  ];

  const handleSortRequest = (cellId) => {
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
          <TableContainer component={Paper} style={{ maxHeight: 390 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {headCells.map((headcell) => (
                    <TableCell
                      sortDirection={orderBy === headcell.id}
                      align="center"
                    >
                      <TableSortLabel
                        active={orderBy === headcell.id}
                        direction={orderBy === headcell.id ? order : "asc"}
                        onClick={() => {
                          handleSortRequest(headcell.id);
                        }}
                      >
                        {headcell.label}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                  <TableCell align="center">Avatar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ListAfterPaginationAndFilter().map((row) => (
                  <TableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      <div>
                        <Link onClick={(event) => handleOpen(event, row.id)}>
                          {row.id + row.first_name}
                        </Link>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.first_name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.last_name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <img src={row.avatar} alt={row.first_name}></img>
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            rowsPerPageOptions={pages}
            rowsPerPage={rowsPerPage}
            page={+page}
            count={totalCount}
            onChangePage={handleChangePage}
            // onChangeRowsPerPage={rowsPerPage}
          >
            <button></button>
          </TablePagination>
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
