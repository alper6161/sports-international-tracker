import {createSlice} from "@reduxjs/toolkit";
import initialState from "../initialState.js";

const totalCost = createSlice({
    name: 'totalCost',
    initialState: initialState.totalCost,
    reducers: {
        setTotalCost(state, action) {
            return action.payload;
        }
    }
})

export const {setTotalCost} = totalCost.actions;
export default totalCost.reducer;