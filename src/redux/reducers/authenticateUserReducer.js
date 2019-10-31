import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authenticateUserReducer(state = initialState.isAuthenticated, action) {
  switch (action.type) {
    case types.AUTHENTICATE_USER_SUCCESS:
      return action.result;
    default:
      return state;
  }
}
