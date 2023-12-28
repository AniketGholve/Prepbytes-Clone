import { createSlice } from "@reduxjs/toolkit";

const prepBytes = createSlice({
    name: "cloneDate",
    initialState: {
        username:"",
        email:""
    },
    reducers: {
        getUser: (state, action) => {
            state.username=localStorage.getItem("username")
            state.email=localStorage.getItem("email")
        },
        setUser: (state, action) => {
            console.log(action)
            localStorage.setItem("username",action.payload.username)
            localStorage.setItem("email",action.payload.email)
            state.username=localStorage.getItem("username")
            state.email=localStorage.getItem("email")
        }
    }
})
export const { getUser ,setUser} = prepBytes.actions
export default prepBytes.reducer