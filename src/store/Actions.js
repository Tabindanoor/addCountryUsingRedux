import axios from 'axios'
import React from 'react'



const Actions = (name)=>async(dispatch, state) => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const countryData = response.data[0];
    console.log(countryData)
    console.log(countryData.name.common)
    console.log(Object.values(countryData.languages))
    // const country = {
    //     name: countryData.name.common,
    //     languages:Object.values(countryData.languages)
    // }
    // const updatedCountries = [...state().countries,country]
    // console.log(updatedCountries)

    // dispatch({type:"ADD_COUNTRY" , payload :country})
    // dispatch({type:"UPDATE_COUNTRIES", payload :updatedCountries})
}

export default Actions
