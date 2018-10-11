import { combineReducers } from "redux";
import { createReducer } from "utilities/reducer";

const itemName = "event";

export default createReducer(itemName, "slug");
export {
	getAllItems as getEvents,
	getItemById as getEventById
} from "utilities/reducer";
