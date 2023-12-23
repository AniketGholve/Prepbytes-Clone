import { createSlice } from "@reduxjs/toolkit";

const prepBytes = createSlice({
    name: "cloneDate",
    initialState: [],
    reducers: {
        getData: (state, action) => {
            console.log("Action Called")
        }
    }
})
export const { getData } = prepBytes.actions
export default prepBytes.reducer