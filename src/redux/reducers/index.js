import {combineReducers} from "redux";
import {moviesReducer} from "./moviesReducer";

let reducer = combineReducers({moviesReducer});

export {reducer}