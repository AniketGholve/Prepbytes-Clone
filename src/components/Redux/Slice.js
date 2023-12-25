import { createSlice } from "@reduxjs/toolkit";

const prepBytes = createSlice({
    name: "cloneDate",
    initialState: {
        username:""
    },
    reducers: {
        getUser: (state, action) => {
            state.username=localStorage.getItem("username")
        },
        setUser: (state, action) => {
            localStorage.setItem("username",action.payload)
            state.username=localStorage.getItem("username")
        }
    }
})
export const { getUser ,setUser} = prepBytes.actions
export default prepBytes.reducer