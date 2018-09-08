import messageReducer from "./message/messageReducer";
import { combineReducers } from "redux";

export default combineReducers({
	message: messageReducer
})