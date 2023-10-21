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
        addLanguage: (state, action) => {
          const { country, language } = action.payload;
          if (!state.data[country]) {
            state.data[country] = [];
          }
          state.data[country].push(language);
        },
        updateLanguage: (state, action) => {
          const { country, index, language } = action.payload;
          state.data[country][index] = language;
        },
        
    }
})

export default countrySlice.reducer
export const { addCountry, updateLanguages, addLanguage, updateLanguage} = countrySlice.actions

