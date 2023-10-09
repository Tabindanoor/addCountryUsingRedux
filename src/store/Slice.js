const { createSlice } = require("@reduxjs/toolkit");
let nextCountryId = 1;


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
        
        }
    }
})

export default countrySlice.reducer
export const { addCountry, updateLanguages} = countrySlice.actions

