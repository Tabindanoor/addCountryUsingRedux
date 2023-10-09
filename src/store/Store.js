import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./Slice";
export const store  = configureStore({
    reducer: {
        country: countrySlice,
    }
})



