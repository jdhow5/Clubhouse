import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authenticatedReducer(state = initialState.isAuthenticated, action) {
  switch (action.type) {
    case types.IS_AUTHENTICATED:
      return {
          ...state,
          value: true
      };
    default:
      return state;
  }
}
