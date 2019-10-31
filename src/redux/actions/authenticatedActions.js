import * as types from "./actionTypes";

export function isAuthenticated() {
  return { type: types.IS_AUTHENTICATED };
}