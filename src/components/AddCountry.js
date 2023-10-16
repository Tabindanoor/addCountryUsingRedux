import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCountry } from '../store/Slice.js'
import {Link, useParams} from "react-router-dom"
import { fetchData } from '../store/ApiSlice.js'

const AddCountry = (data) => {
  // const {id} = useParams()
  const countryApi = useSelector(state=>state.api)
  // console.log(countryApi, "country use selector ")
  // console.log(countryApi.languages, "country use selector ")
    const dispatch = useDispatch()

    // countryApi.forEach((obj, index) => {
    //   const languageCode = Object.keys(obj.languages)[0]; // Get the first language code in the "languages" object
    //   const languageName = obj.languages[languageCode];
    //   console.log(languageName)
    //   // console.log(`Object ${index + 1}: Language Code: ${languageCode}, Language Name: ${languageName}`);
    // });

  //  const mylanguage =  countryApi.forEach((obj, index) => {
  //     if (obj && obj.languages) {
  //       const languageCode = Object.keys(obj.languages)[0];
  //       const languageName = obj.languages[languageCode];
  //       console.log(`${languageName}`);
  //     }
  //   });
// const countryData = useSelector((state)=>state.country)
//   const [countryDetail, setCountryDetail] = useState({
//     country:"",
//     official:"",
//     language:"",

   
//   })

  // const handleInputChange=(e)=>{
  //   const {name, value} = e.target;
  //   setCountryDetail({
  //     ...countryDetail, 
  //     [name] : value
  //   }
  //   )

  // }


  // const addCountryBtn = () =>{
  
  //     dispatch(addCountry(countryDetail));
  //     console.log(countryData, "data in the selector")
  //     setCountryDetail({
  //       country: "",
  //       official: "",
  //       language: "",
     
  //     })
   
  // }
  useEffect(() => {
    dispatch(fetchData())
    // const response = fetch("https://restcountries.com/v3.1/all")
    // .then((data)=>data.json())
    // .then((data)=>console.log(data))
    // console.log(response,"promise")
    // console.log(response.id)
    }, [])
  
    // const languages = Object.entries(countryApi)
    // .map(([code, language]) => (
    //   <div key={code}>
    //     {/* <p>Language Code: {code}</p> */}
    //     <p>Language Name: {language}</p>
    //   </div>
    // ));

  return (
    
    <div className='App' style={{alignItems:"center"}}>

      {/* <input
        type="text"
        onChange={handleInputChange}
        style={{backgroundColor:"black", width:"20%",textAlign:"center", justifyContent:"center", justifySelf:"center",padding:"15px", color:"white", fontSize:"20px", fontFamily:"monospace", fontWeight:"bolder", borderRadius:"10px", cursor:"pointer", marginRight:"20px"}} 
        name="country" 
        placeholder='Enter Country name'
        value={countryDetail.country} 
/>

<input
        type="text"
        onChange={handleInputChange}
        style={{backgroundColor:"black", width:"20%",textAlign:"center", justifyContent:"center", justifySelf:"center",padding:"15px", color:"white", fontSize:"20px", fontFamily:"monospace", fontWeight:"bolder", borderRadius:"10px", cursor:"pointer", marginRight:"20px"}} 
        name="official" 
        placeholder='Enter Country Official name'
        value={countryDetail.official} 
/>

<input
        type="text"
        onChange={handleInputChange}
        style={{backgroundColor:"black", width:"20%",textAlign:"center", justifyContent:"center", justifySelf:"center",padding:"15px", color:"white", fontSize:"20px", fontFamily:"monospace", fontWeight:"bolder", borderRadius:"10px", cursor:"pointer", marginRight:"20px"}} 
        name="language" 
        placeholder='Enter Country Language'
        value={countryDetail.language} 

/>
<br />
<br />
<button onClick={addCountryBtn} style={{backgroundColor:"burlywood", width:"20%",textAlign:"center", justifyContent:"center", justifySelf:"center",padding:"15px", color:"black", fontSize:"20px", fontFamily:"monospace", fontWeight:"bolder", borderRadius:"10px", cursor:"pointer", marginRight:"20px"}}  >ADD COUNTRY </button> */}

<br />
<br />
<br />

<table border={{}} className='App'>
  <thead>
    <tr style={{fontFamily:"fantasy",fontSize:"24px"}}>
      <th>Country Name</th>
      <th>Country Official Name</th>
      <th>Country Language</th>
      <th>Country Action</th>
    </tr>
  </thead>

  
 
  { countryApi && countryApi.map((country, index) => (
    <tbody key={country.id}>
      <tr style={{fontFamily:"serif",fontSize:"18px"}}>
        <td>{country.name.common}</td>
        <td>{country.name.official}</td>
        <td> 
          
        {/* {country.languages && Object.keys(country.languages)[0]}: */}
        {country.languages && country.languages[Object.keys(country.languages)[0]]}
        </td>
      <td style={{ cursor: "pointer" }}  ><Link to={`/${index}`} style={{textDecoration:"none", color:"black",width:"100%"}} >View</Link> </td>
      </tr>
    </tbody>
  ))
}



</table>

    </div>
  )
}

export default AddCountry
