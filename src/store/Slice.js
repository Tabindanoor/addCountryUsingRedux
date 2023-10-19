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
        
        },
         addLanguage: (state, action) => {
            const { country, language } = action.payload;
            if (!state[country]) {
              state[country] = [];
            }
            state[country].push(language);
          },
          updateLanguage: (state, action) => {
            const { country, oldLanguage, newLanguage } = action.payload;
            const index = state[country].indexOf(oldLanguage);
            if (index !== -1) {
              state[country][index] = newLanguage;
            }
          },
    }
})

export default countrySlice.reducer
export const { addCountry, updateLanguages, addLanguage, updateLanguage} = countrySlice.actions

