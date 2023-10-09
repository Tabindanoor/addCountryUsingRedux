const { createSlice } = require("@reduxjs/toolkit");

const countrySlice = createSlice({
    name: "country",
    initialState:[],
    reducers:{
        addCountry:(state,action)=>{
            state.push(action.payload);
        },
        updateLanguages:(state,action)=>{
            const {countryId, language} = action.payload;
            const country = state[countryId];
            const existingLanguages = country.languages.find((lang)=>lang===language)
            if(!existingLanguages) {
                country.languages.push(language);
            }
         
        //    find the language of the specific country
        //  if the id of the country matches with the id in the state
        //  and if the language is not found in the model 
        // add the language to the model and display it on the screen
        
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