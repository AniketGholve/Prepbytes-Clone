import { configureStore } from "@reduxjs/toolkit";
import  prepBytes  from "./Slice"
let store = configureStore({
    reducer: prepBytes
})
export default store