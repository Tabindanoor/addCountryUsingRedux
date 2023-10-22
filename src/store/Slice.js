const { createSlice } = require("@reduxjs/toolkit");
let nextCountryId = 1;


const countrySlice = createSlice({
    name: "country",
    initialState:{
      data: {}
    },

    reducers:{
        addCountry:(state,action)=>{
            state.push(action.payload);
        },
        // addLanguage: (state, action) => {
        //   const { id, language } = action.payload;
        //   // Find the country by ID
        //   const country = state.api[id];
    
        //   if (country) {
        //     if (!country.languages) {
        //       country.languages = [];
        //     }
    
        //     country.languages.push(language);
        //   }
        // },
        // updateLanguage: (state, action) => {
        //   const { id, language } = action.payload;
        //   const country = state.api[id];
    
        //   if (country) {
        //     const languageIndex = country.languages.findIndex((lang) => lang === language);
        //     if (languageIndex !== -1) {
        //       country.languages[languageIndex] = language;
        //     }
        //   }
        // }
        addLanguage: (state, action) => {
          const { id, language } = action.payload;
          
          // Check if the country with the given ID exists in the state.api
          if (state.api && state.api[id]) {
            const country = state.api[id];
            
            // Check if the 'languages' property exists, and if not, create it as an array
            if (!country.languages) {
              country.languages = [];
            }
            
            // Add the new language to the 'languages' array
            country.languages.push(language);
          }
        },
        updateLanguage: (state, action) => {
          const { id, language } = action.payload;
          
          // Check if the country with the given ID exists in the state.api
          if (state.api[id]) {
            const country = state.api[id];
            
            if (country.languages) {
              const languageIndex = country.languages.findIndex((lang) => lang === language);
              if (languageIndex !== -1) {
                // Update the language in the 'languages' array
                country.languages[languageIndex] = language;
              }
            }
          }
        },
        
    }
})

export default countrySlice.reducer
export const { addCountry, updateLanguages, addLanguage, updateLanguage} = countrySlice.actions

