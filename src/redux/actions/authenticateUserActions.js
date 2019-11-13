import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function isAuthenticated(result) {
  return { type: types.AUTHENTICATE_USER_SUCCESS, result: result };
}

export function authenticateUser(userData) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return userApi
      .authenticateUser(userData)
      .then(response => {
        dispatch(isAuthenticated(response.result));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function logoutUser() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return userApi
      .logoutUser()
      .then(response => {
        dispatch(isAuthenticated(response.result));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}