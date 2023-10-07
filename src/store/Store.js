// import { configureStore } from "@reduxjs/toolkit";
// import { addCountry } from "./Slice";


// export const store = configureStore({
    
//     reducer:{
//         //        [reducerName]: reducer,
//         country :addCountry,
      
//     }
// })
// store/Store.js
import { configureStore } from "@reduxjs/toolkit";
import mycountrySlice from "./Slice";

export const store = configureStore({
  reducer: {
    country: mycountrySlice,
  },
});
