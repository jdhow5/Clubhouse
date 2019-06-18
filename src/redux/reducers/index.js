import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import clubs from "./clubsReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  clubs,
  apiCallsInProgress
});

export default rootReducer;
