import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import clubs from "./clubsReducer";
import apiCallsInProgress from "./apiStatusReducer";
import isAuthenticated from "./authenticatedReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  clubs,
  apiCallsInProgress,
  isAuthenticated
});

export default rootReducer;
