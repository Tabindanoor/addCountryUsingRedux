import './App.css';
import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCountry } from './store/Slice';
import { useSelector } from 'react-redux';


const  App=()=> {
  const [mycountry, setMyCountry] = useState("")
  const dispatch = useDispatch();

  const handleInputChange=(e)=>{
    setMyCountry(e.target.value)
    console.log(e.target.value)
  }

  const country = useSelector((state)=>state.country)
  console.log(country.payload, "country")
 
const handleAdd=()=>{
  if(mycountry)
  {
    dispatch(addCountry({name: mycountry})) 
    setMyCountry("")
}
}
  return (
    <div className="App">
        <h1>Hey there i am using Redux-Toolkit</h1>
        <p>Add country using the Redux Store </p>
        <input style={{backgroundColor:"black", width:"20%",textAlign:"center", justifyContent:"center", justifySelf:"center",padding:"15px", color:"white", fontSize:"20px", fontFamily:"monospace", fontWeight:"bolder", borderRadius:"10px", cursor:"pointer"}} type="text" name="country"  onChange={(e)=>{handleInputChange(e)}} id="" value={mycountry} />
        <br /> <br />
        <button onClick={handleAdd} style={{backgroundColor:"black", width:"15%",textAlign:"center",padding:"10px", color:"green", fontSize:"20px", fontFamily:"monospace", fontWeight:"bolder", borderRadius:"20px", cursor:"pointer"}}>ADD COUNTRY</button>
        <table border={{}}>
          <thead>
          <tr>
            <th scope='col'>Name of Country</th>
            <th scope='col'>Capital City Name</th>
            <th scope='col'>Capital City Name</th>
          </tr>
          </thead>
          <tbody>
          {/* {country.map((country, index) => (
            <tr key={index}>
              <td>{country.name}</td>
              <td>{country.capitalCity}</td>
              <td>{country.anotherProperty}</td>
            </tr>
          ))} */}
          <tr>
              <td>name</td>
              <td>capitalCity</td>
              <td>anotherProperty</td>
            </tr>
          </tbody>
         
         
        </table>

    </div>
  );
}

export default App;
