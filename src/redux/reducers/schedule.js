import {createSlice} from "@reduxjs/toolkit";
import initialState from "../initialState.js";

const schedule = createSlice({
    name: 'schedule',
    initialState: initialState.scheduleData,
    reducers: {
        setScheduleData(state, action) {
            return [...action.payload];
        }
    }
})

export const {setScheduleData} = schedule.actions;
export default schedule.reducer;