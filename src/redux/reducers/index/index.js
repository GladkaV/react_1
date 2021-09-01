import {combineReducers} from "redux";
import {usersReducer} from "../usersReducer/usersReducer";

let reducer = combineReducers({usersReducer});

export {reducer};