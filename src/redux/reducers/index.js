import {combineReducers} from "@reduxjs/toolkit";
import schedule from "./schedule.js";
import totalCost from "./totalCost.js";

export const rootReducer = combineReducers({
    schedule,
    totalCost
})