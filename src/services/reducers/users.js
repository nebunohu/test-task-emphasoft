import { CLEAR_USERS, GET_USERS_FAILED, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "../actions/users-actions";

const initialState = {
  users: [],

  getUsersRequest: false,
  getUsersSuccess: false,
  getUsersFailed: false,
};

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS_REQUEST: {
      return {
        ...state,
        getUsersRequest: true,
        getUsersSuccess: false,
        getUsersFailed: false,
      }
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        getUsersRequest: false,
        getUsersSuccess: true,
        users: action.users
      }
    }
    case GET_USERS_FAILED: {
      return {
        ...state,
        getUsersRequest: false,
        getUsersFailed: true,
      }
    }
    case CLEAR_USERS: {
      return {
        ...state,
        users: [],
      }
    }
    default: return state;
  }
}