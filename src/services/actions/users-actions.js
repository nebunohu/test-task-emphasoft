import { getUsers } from "../../utils/get-users";
import { API_URL } from "../../utils/url";

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';
export const CLEAR_USERS = 'CLEAR_USERS';

export const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST,
  };
};

export const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    users
  };
};

export const getUsersFailed = () => {
  return {
    type: GET_USERS_FAILED,
  };
};

export const clearUsers = () => {
  return {
    type: CLEAR_USERS,
  }
}

export const getUsersThunk = () => async (dispatch) => {
  dispatch(getUsersRequest());
  try{
    const users = await getUsers(`${API_URL}/api/v1/users/`)
      .then(response => response.json())
      .then(users => users);
    dispatch(getUsersSuccess(users));
  } catch(error) {
    console.log(error);
    dispatch(getUsersFailed())
  }
  
}