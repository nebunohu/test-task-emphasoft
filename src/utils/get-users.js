import { authorizationToken } from "./authorization-header";

export const getUsers = async (url) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': authorizationToken()
  };
  const res = await fetch(url, {method: 'GET', headers});
  return res;
  
};