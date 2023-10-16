import { createSlice } from "@reduxjs/toolkit";
 const ApiSlice =createSlice({
    name:"api",
    initialState:[],
    reducers:{
        addData:(state,action)=>{
             state = action.payload;
             return state
            }}
})

export default ApiSlice.reducer
export const {addData} = ApiSlice.actions



export const fetchData = () => {
    return async function ApiThunk(dispatch, getState) {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const myData = await response.json();
        dispatch(addData(myData));
        // console.log(dispatch(addData(myData)));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  };



  // export const fetchData =()=>{
        // return async function ApiThunk(dispatch, getState){
        //     const response = await fetch("https://restcountries.com/v3.1/all");
        //     const myData = await response.json();
        //     // const myCountryData = myData.countries
        //     dispatch(addData(myData))
        //     console.log( dispatch(addData(myData)), "my slice data ")

        // }
       
// }