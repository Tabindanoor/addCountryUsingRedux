import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { Link, useParams } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { updateLanguages, updateLanguage, addLanguage } from '../store/Slice';



const DetailCountry = ({args, country}) => {
  const dispatch = useDispatch();
  const {id} = useParams()
  const languages = useSelector((state) => state.country[country]);
  console.log(languages)
  const [languageToAdd, setLanguageToAdd] = useState('');
  const [languageToUpdate, setLanguageToUpdate] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const handleAddLanguage = () => {
    dispatch(addLanguage({ country, language: languageToAdd }));
    setLanguageToAdd('');
  };

  const handleUpdateLanguage = () => {
    dispatch(updateLanguage({ country, oldLanguage: languageToUpdate, newLanguage: languageToAdd }));
    setLanguageToAdd('');
    setLanguageToUpdate('');
    setIsUpdating(false);
  };







    const myData = useSelector(state=>state.api[id])
    // console.log(myData)

    const [language, setlanguage] = useState("")
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

//  const currency =  myData.forEach((obj, index) => {
//       if (obj && obj.languages) {
//         const languageCode = Object.keys(obj.languages)[0];
//         const languageName = obj.languages[languageCode];
//         console.log(`${languageName}`);
//       }
//     });

for (const currencyKey in myData.currencies) {
  if ( myData && myData.currencies.hasOwnProperty(currencyKey)) {
    const currency = myData.currencies[currencyKey];
    // console.log(currencyKey);        // Output: USD, EUR, GBP, and so on
    // console.log(currency.name);      // Output: The name of the currency
    // console.log(currency.symbol);    // Output: The symbol of the currency
  }
}

const handleChange=(e)=>{
  setlanguage(e.target.value);
  console.log(e.target.value);
}
// const handleAddLanguage=()=>{
//   setlanguage(updateLanguages)
// }
  return (
    <div>
      {/* {JSON.stringify(myData)}   */}

<div className='card'>
    {/* <p>country name </p>  <p>{myData.name.common}</p>
    <p>country Official name</p> <p>{myData.name.common}</p>
    <p>Currencies</p>
    {Object.keys(myData.currencies).map(currencyKey => {
          const currency = myData.currencies[currencyKey];
          return (
            <p key={currencyKey}>
              {currencyKey}: {currency.name} ({currency.symbol})
            </p>
          )}
    )}
    <p>Region</p> <p>{myData.region} </p>
    <p>SubRegion</p> <p>{myData.subregion} </p>
    <p>Here Goes image</p>
    <img src={myData.flags.png || myData.flags.svg} height={"300px"} width={"500px"} alt="img" />
    <Link to={myData.maps.googleMaps || myData.maps.openStreetMaps}
     target="_blank"
     rel="noopener noreferrer"
    >Here Goes the map</Link>
    <p>Here is the language model </p> */}
    <b > {myData.languages && myData.languages[Object.keys(myData.languages)[0]]}</b>
   
    {/* <div>
      <Button color="danger" onClick={toggle}>
        ADD
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal Languages</ModalHeader>
        <ModalBody className='flex justify-content-between'>

    <b > {myData.languages && myData.languages[Object.keys(myData.languages)[0]]}</b>
<br />
          <Button color='warning'>Update</Button>
          <br />
          <Label for="exampleEmail">
     ADD language
    </Label>
    <Input onChange={(e)=>handleChange(e)}  />


        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddLanguage}>
          ADD
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div> */}
    
    <div>
      <h1>Languages for {country}</h1>
      <ul>
        {languages &&
          languages.map((language, index) => (
            <li key={index}>
              {language}{' '}
              <button
                onClick={() => {
                  setLanguageToUpdate(language);
                  setIsUpdating(true);
                }}
              >
                Update
              </button>
            </li>
          ))}
      </ul>
      <input
        type="text"
        value={isUpdating ? languageToUpdate : languageToAdd}
        onChange={(e) => {
          if (isUpdating) {
            setLanguageToUpdate(e.target.value);
          } else {
            setLanguageToAdd(e.target.value);
          }
        }}
      />
      <button onClick={isUpdating ? handleUpdateLanguage : handleAddLanguage}>
        {isUpdating ? 'Update' : 'Add'}
      </button>
    </div>
</div>
    </div>
  )
}

export default DetailCountry
