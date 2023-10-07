
import './App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCountry } from './store/Slice';

const App = () => {
  const [mycountry, setMyCountry] = useState("");
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);

  const handleInputChange = (e) => {
    setMyCountry(e.target.value);
  };

  const handleAdd = () => {
    if (mycountry) {
      dispatch(addCountry({ name: mycountry }));
      setMyCountry("");
    }
  };

  return (
    <div className="App">
      <h1>Hey there, I am using Redux-Toolkit</h1>
      <p>Add a country using the Redux Store</p>
      <input
        type="text"
        style={{backgroundColor:"black", width:"20%",textAlign:"center", justifyContent:"center", justifySelf:"center",padding:"15px", color:"white", fontSize:"20px", fontFamily:"monospace", fontWeight:"bolder", borderRadius:"10px", cursor:"pointer"}} 
        name="country"
        onChange={(e) => handleInputChange(e)}
        value={mycountry}

      />
      <br /><br />
      <button
        onClick={handleAdd}
        style={{
          backgroundColor: "black",
          width: "15%",
          textAlign: "center",
          padding: "10px",
          color: "green",
          fontSize: "20px",
          fontFamily: "monospace",
          fontWeight: "bolder",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        ADD COUNTRY
      </button>
      <table border="1">
        <thead>
          <tr>
            <th scope='col'>Name of Country</th>
          </tr>
        </thead>
        <tbody>
          {country.map((countryData, index) => (
            <tr key={index}>
              <td>{countryData.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
// function ot() {
//   let value = 10;
//   return function inn() {
//   return value;
//   };
//   }
  
//   const cF = ot();
//   const value = 20;
  
//   console.log(cF())