import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
    name: "country",
    initialState:[],
    reducers: {
        addCountry :(state, action)=>{
            state.push(action.payload);
            console.log(state, "state")
        }
    }
})

export default countrySlice.reducer
export const {addCountry} = countrySlice.actions

