// components/CountryDetail.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateLanguages } from '../store/Slice.js';

const  DetailCountry=()=> {
  const selectedCountry = useSelector((state) => state.country); // Implement logic to select the current country
  console.log(selectedCountry,"select");
  const dispatch = useDispatch();
  const language = selectedCountry.map((lang)=>(lang.language))
  console.log(language);
  const [newLanguage, setNewLanguage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const handleAddLanguage = () => {
    if (selectedCountry && newLanguage.trim() !== '') {
      dispatch(
        updateLanguages({
          countryId: selectedCountry.id,
          language: newLanguage,
        })
      );
      setNewLanguage('');
    }
  };

  const handleStartUpdateLanguage = (language) => {
    setSelectedLanguage(language);
    setIsUpdateMode(true);
  };

  const handleUpdateLanguage = () => {
    if (selectedCountry && selectedLanguage.trim() !== '') {
      dispatch(
        updateLanguages({
          countryId: selectedCountry.id,
          language: selectedLanguage,
        })
      );
      setSelectedLanguage('');
      setIsUpdateMode(false);
    }
  };

  return (
    <div>
      {/* Display country details */}
      <h2>Country Details</h2>
      <button>Open Google Maps</button>
      {
        selectedCountry.map((data)=>{
          return(
            <div>
              {data.country}
            </div>
          )
        })
      }
      <div>
        {/* Display languages */}
        <h3>Languages</h3>
        {/* {selectedCountry ? (
          <ul>
            {selectedCountry.languages.map((language, index) => (
              <li key={index}>
                {language}{' '}
                <button onClick={() => handleStartUpdateLanguage(language)}>
                  Update
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No country selected.</p>
        )} */}

        {/* Add Language */}
        <div>
          {isUpdateMode ? (
            <div>
              <input
                type="text"
                placeholder="Update language"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              />
              <button onClick={handleUpdateLanguage}>Update</button>
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Add language"
                value={newLanguage}
                onChange={(e) => setNewLanguage(e.target.value)}
              />
              <button onClick={handleAddLanguage}>Add</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailCountry



// // components/CountryDetail.js
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { updateLanguages } from '../store/Slice';

// function CountryDetail() {
//   const selectedCountry = useSelector((state) => state.countries); // Implement logic to select the current country
//   const dispatch = useDispatch();
//   const [newLanguage, setNewLanguage] = useState('');
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [isUpdateMode, setIsUpdateMode] = useState(false);

//   const handleAddLanguage = () => {
//     if (newLanguage.trim() !== '') {
//       dispatch(
//         updateLanguages({
//           countryId: selectedCountry.id, // Assuming you have an ID for countries
//           language: newLanguage,
//         })
//       );
//       setNewLanguage('');
//     }
//   };

//   const handleStartUpdateLanguage = (language) => {
//     setSelectedLanguage(language);
//     setIsUpdateMode(true);
//   };

//   const handleUpdateLanguage = () => {
//     if (selectedLanguage.trim() !== '') {
//       // Implement logic to update the selected language for the country
//       dispatch(
//         updateLanguages({
//           countryId: selectedCountry.id,
//           language: selectedLanguage,
//         })
//       );
//       setSelectedLanguage('');
//       setIsUpdateMode(false);
//     }
//   };

//   return (
//     <div>
//       {/* Display country details */}
//       <h2>Country Details</h2>
//       <button>Open Google Maps</button>

//       <div>
//         {/* Display languages */}
//         <h3>Languages</h3>
//         <ul>
//           {selectedCountry.languages.map((language, index) => (
//             <li key={index}>
//               {language}{' '}
//               <button onClick={() => handleStartUpdateLanguage(language)}>
//                 Update
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Add Language */}
//         <div>
//           {isUpdateMode ? (
//             <div>
//               <input
//                 type="text"
//                 placeholder="Update language"
//                 value={selectedLanguage}
//                 onChange={(e) => setSelectedLanguage(e.target.value)}
//               />
//               <button onClick={handleUpdateLanguage}>Update</button>
//             </div>
//           ) : (
//             <div>
//               <input
//                 type="text"
//                 placeholder="Add language"
//                 value={newLanguage}
//                 onChange={(e) => setNewLanguage(e.target.value)}
//               />
//               <button onClick={handleAddLanguage}>Add</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CountryDetail;




// import React from 'react'
// import {Link} from "react-router-dom"
// import {BiHomeHeart} from "react-icons/bi"
// import { addCountry, updateLanguages } from '../store/Slice'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'

// const DetailCountry = ({id}) => {
//   const countryData = useSelector(state=>state.country)
//     console.log('countrymine',countryData);
//     const dispatch = useDispatch();
//   return (
//     <div className='App'>
//      <Link style={{textDecoration:"none"}} to={"/"}><h1><BiHomeHeart/>Home</h1></Link> 
//       <p>
//         Name: {countryData[0].country}<br />
//         Population: {countryData[0].official}<br />
//         Languages: {countryData[0].language}
//       </p>
//     </div>
//   )
// }

// export default DetailCountry
