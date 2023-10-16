import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./Slice";
import ApiSlice from "./ApiSlice";
export const store  = configureStore({
    reducer: {
        country: countrySlice,
        api:ApiSlice,
    }
})



