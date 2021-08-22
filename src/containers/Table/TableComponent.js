import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TableSortLabel } from "@material-ui/core";
import { Link } from "react-router-dom";

const TableComponent = (props) => {
  const headCells = props.headCells;

  return (
    <TableContainer component={Paper} style={{ maxHeight: 390 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headCells.map((headcell) => (
              <TableCell
                sortDirection={props.orderBy === headcell.id}
                align="center"
              >
                <TableSortLabel
                  active={props.orderBy === headcell.id}
                  direction={
                    props.orderBy === headcell.id ? props.order : "asc"
                  }
                  onClick={() => {
                    props.handleSortRequest(headcell.id);
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
          {props.ListAfterPaginationAndFilter().map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <div>
                  <Link onClick={(event) => props.handleOpen(event, row.id)}>
                    {row.id + row.first_name}
                  </Link>
                </div>
              </TableCell>
              <TableCell align="center">{row.first_name}</TableCell>
              <TableCell align="center">{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">
                <img src={row.avatar} alt={row.first_name}></img>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
