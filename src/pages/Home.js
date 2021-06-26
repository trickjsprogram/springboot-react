import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, getSingleUser, loadUsers } from "../redux/actions";
import { useHistory } from "react-router-dom";

const useStylesButton = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    marginTop: 100,
    minWidth: 900,
  },
});

const Home = () => {
  const classes = useStyles();
  const buttonClasses = useStylesButton();
  return (
    <>
      <div className={buttonClasses.root}>
        <Button variant="contained" color="primary">
          Add User
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Stream</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {users &&
              users.map((user) => (
                <StyledTableRow key={user.name}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.stream}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div className={buttonClasses.root}>
                      <ButtonGroup
                        variant="contained"
                        aria-label="contained primary button group"
                      >
                        <Button
                          color="secondary"
                          style={{ marginRight: "5px" }}
                        >
                          Delete
                        </Button>
                        <Button color="primary" style={{ marginRight: "5px" }}>
                          Edit
                        </Button>
                        <Button>View</Button>
                      </ButtonGroup>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
