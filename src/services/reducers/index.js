import { combineReducers } from "redux";
import { authReducer } from "./auth-reducer";
import { usersReducer } from "./users";


export const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer
});