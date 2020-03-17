import { combineReducers } from "redux";
// import session from "./session_reducer";
import session from "./session_api_reducer"
import errors from "./errors_reducer";
import tweets from "./tweets_reducer";

const rootReducer = combineReducers({
	errors,
	session,
	tweets,
});
export default rootReducer;
