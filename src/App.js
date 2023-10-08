

import React, { useState } from 'react'
import "./App.css"
import { useSelector, useDispatch } from 'react-redux'
import { addCountry } from './store/Slice'


const App = () => {
const dispatch = useDispatch()
const countryData = useSelector((state)=>state.country)
  const [countryDetail, setCountryDetail] = useState({
    country:"",
    official:"",
    language:"",
    action:""
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
      dispatch(addCountry(countryData))
      console.log(countryData)
      setCountryDetail({
        country: "",
        official: "",
        language: "",
        action:""
      })
    // }
    
  }


  return (
    <div className='App' style={{alignItems:"center"}}>
      <h1>This is the Country Details Add Button </h1>

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


<input
        type="text"
        onChange={handleInputChange}
        style={{backgroundColor:"black", width:"20%",textAlign:"center", justifyContent:"center", justifySelf:"center",padding:"15px", color:"white", fontSize:"20px", fontFamily:"monospace", fontWeight:"bolder", borderRadius:"10px", cursor:"pointer", marginRight:"20px"}} 
        name="action"
        placeholder='Enter Country action'
        value={countryDetail.action} 


/>


<br />
<br />
<button onClick={addCountryBtn} style={{backgroundColor:"burlywood", width:"20%",textAlign:"center", justifyContent:"center", justifySelf:"center",padding:"15px", color:"black", fontSize:"20px", fontFamily:"monospace", fontWeight:"bolder", borderRadius:"10px", cursor:"pointer", marginRight:"20px"}}  >hwfew </button>

<br />
<br />

<table border={{}}>
  <thead>
    <tr>
      <th>Country Name</th>
      <th>Country Official Name</th>
      <th>Country Language</th>
      <th>Country Action</th>
    </tr>
  </thead>
 
    { 
      countryData.map(( country)=>(
          <tbody key={country.id}>
          <tr >
          <td>{country.country} </td>
          <td>{country.official} </td>
          <td>{country.language} </td>
          <td>{country.action} </td>
        </tr>
        </tbody>
        )

      )
    }
   
 
</table>

    </div>
  )
}

export default App

// import './App.css';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addCountry, officialName, languages } from './store/Slice';

// const App = () => {
//   const [mycountry, setMyCountry] = useState("");


//   const dispatch = useDispatch();
//   const country = useSelector((state) => state.country);


//   const handleInputChange = (e) => {
//     setMyCountry(e.target.value);
//   };

//   const handleAdd = () => {
//     if (mycountry ) {
//       dispatch(addCountry({ name: mycountry }));
     
//       setMyCountry("");
    
//     }
//   };

 

//   return (
//     <div className="App">
//       <h1>Hey there, I am using Redux-Toolkit</h1>
//       <p>Add a country using the Redux Store</p>
//       <input
//         type="text"
//         style={{backgroundColor:"black", width:"20%",textAlign:"center", justifyContent:"center", justifySelf:"center",padding:"15px", color:"white", fontSize:"20px", fontFamily:"monospace", fontWeight:"bolder", borderRadius:"10px", cursor:"pointer"}} 
//         name="country"
//         onChange={(e) => handleInputChange(e)}
//         value={mycountry}

// />

//       <br /><br />
//       <button
//         onClick={handleAdd}
//         style={{
//           backgroundColor: "black",
//           width: "15%",
//           textAlign: "center",
//           padding: "10px",
//           color: "green",
//           fontSize: "20px",
//           fontFamily: "monospace",
//           fontWeight: "bolder",
//           borderRadius: "20px",
//           cursor: "pointer",
//         }}
//       >
//         ADD COUNTRY
//       </button>
//       <table border="1">
//         <thead>
//           <tr>
//             <th scope='col'>Name of Country</th>
//             <th scope='col'>Official name</th>
//             <th scope='col'>Languages</th>
//             <th scope='col'>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {country.map((countryData, index) => (
//             <tr key={index}>
//               <td>{countryData.name}</td>
//             </tr>
//           ))}         
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;


// function ot() {
//   let value = 10;
//   return function inn() {
//   return value;
//   };
//   }
  
//   const cF = ot();
//   const value = 20;
  
//   console.log(cF())