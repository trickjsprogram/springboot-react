import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});

const userUpdated = () => ({
  type: types.UPDATE_USER,
});

const singleUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

 