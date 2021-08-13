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
import { IconButton, TablePagination } from "@material-ui/core";
import { CONSUMER_LIST_DEFAULT_PAGE } from "../../../utils/constants";
import { loadUserList } from "../../../redux/actions/consumerAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UserDetailModal from "./ModalDetailPage";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
//import ModalPage from "../../../Modal/ModalPage";

const DisplayUserList = (props) => {
  const { list: rows, total } = props;
  //const pageNo = props.list.page;
  const [page, setPage] = useState(null);
  const [open, setOpen] = useState(false);
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
    setPage(newPage);
  };

  const ListAfterPaginationAndFilter = () => {
    return filterFn.fn(rows);
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

  return (
    <React.Fragment>
      {isEmpty(rows) && <h1> No Users Found</h1>}
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
                  <StyledTableCell>Id</StyledTableCell>
                  <StyledTableCell align="right">FirstName</StyledTableCell>
                  <StyledTableCell align="right">LastName</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right">Avatar</StyledTableCell>
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
                    <StyledTableCell align="right">
                      {row.first_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.last_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">
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
            page={page}
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
