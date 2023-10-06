import { configureStore } from "@reduxjs/toolkit";
import { addCountry } from "./Slice";
// import { addCountry } from "./Slice";
// import { updateLanguage } from "./Slice";


export const store = configureStore({
    
    reducer:{
        //        [reducerName]: reducer,
        country :addCountry,
      
    }
})