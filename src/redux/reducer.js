import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: true,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducers;
