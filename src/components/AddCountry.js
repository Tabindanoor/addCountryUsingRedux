import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCountry } from '../store/Slice.js'
import {Link, useParams} from "react-router-dom"

const AddCountry = (data) => {
  const {id} = useParams()
    const dispatch = useDispatch()
const countryData = useSelector((state)=>state.country)
  const [countryDetail, setCountryDetail] = useState({
    country:"",
    official:"",
    language:"",

   
  })

  const handleInputChange=(e)=>{
    // console.log(e)
    const {name, value} = e.target;
    // const [name] = {value}
    // console.log(name)
    // console.log(value)
    setCountryDetail({
      ...countryDetail, 
      [name] : value
    }
    )
    // console.log(value)
  }


  const addCountryBtn = () =>{
    // if(countryDetail){
    //   if(countryDetail)
    // const newCountry = {id:Math.random(),name:countryDetail}
      dispatch(addCountry(countryDetail));
      console.log(countryData, "data in the selector")
      setCountryDetail({
        country: "",
        official: "",
        language: "",
     
      })
    // }
    
  }

  return (
    
    <div className='App' style={{alignItems:"center"}}>

      <input
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
<button onClick={addCountryBtn} style={{backgroundColor:"burlywood", width:"20%",textAlign:"center", justifyContent:"center", justifySelf:"center",padding:"15px", color:"black", fontSize:"20px", fontFamily:"monospace", fontWeight:"bolder", borderRadius:"10px", cursor:"pointer", marginRight:"20px"}}  >ADD COUNTRY </button>

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
 
  { 
  countryData.map((country, index) => (
    <tbody key={country.id}>
      <tr style={{fontFamily:"serif",fontSize:"18px"}}>
        <td>{country.country}</td>
        <td>{country.official}</td>
        <td>{country.language}</td>
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
