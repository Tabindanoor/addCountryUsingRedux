const { createSlice } = require("@reduxjs/toolkit");

const countrySlice = createSlice({
    name: "country",
    initialState:[],
    reducers:{
        addCountry:(state,action)=>{
            state.push(action.payload);
        }
    }
})

export default countrySlice.reducer
export const { addCountry } = countrySlice.actions



// import { createSlice } from "@reduxjs/toolkit";

// const countrySlice = createSlice({
//   name: "mycountry",
//   initialState: [],
//   reducers: {
//     addCountry: (state, action) => {
//       state.push(action.payload);
//     },
    
//   },
// });

// export default countrySlice.reducer;
// export const { addCountry } = countrySlice.actions;

// const x = 10;
// const y = (function() {
// return function(x) {
// console.log(x);
// };
// })();
// y(20);