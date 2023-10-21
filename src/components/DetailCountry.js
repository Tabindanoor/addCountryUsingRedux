import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { Link, useParams } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { updateLanguage, addLanguage } from '../store/Slice';

const DetailCountry = ({args, country}) => {
  const dispatch = useDispatch();
  const {id} = useParams()
  const languages = useSelector((state) => state.api[id].languages);
  console.log(languages, "this ")

//  const dispatch = useDispatch();
  // const myData = useSelector((state) => state.languages.data);

  // const [modal, setModal] = useState(false);
  const [languageInput, setLanguageInput] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(null);

  const toggle = () => {
    setModal(!modal);
    setLanguageInput('');
    setIsUpdating(false);
    setSelectedLanguageIndex(null);
  };

  const handleAddLanguage = (country) => {
    if (languageInput.trim() === '') {
      // You can add validation or display an error message here.
      return;
    }

    if (!isUpdating) {
      // Adding a new language
      dispatch(addLanguage({ country, language: languageInput }));
    } else {
      // Updating an existing language
      dispatch(updateLanguage({ country, index: selectedLanguageIndex, language: languageInput }));
    }

    toggle(); // Close the modal
  };

  const handleEditLanguage = (country, index) => {
    // Set the selected language and show the modal for editing
    setSelectedLanguageIndex(index);
    setLanguageInput(myData[country][index]);
    setIsUpdating(true);
    setModal(true);
  };

    const myData = useSelector(state=>state.api[id] )
    // console.log(myData)
    const [modal, setModal] = useState(false)
    // const toggle = () => setModal(!modal);
for (const currencyKey in myData.currencies) {
  if ( myData && myData.currencies.hasOwnProperty(currencyKey)) {
    const currency = myData.currencies[currencyKey];
    // console.log(currencyKey);        // Output: USD, EUR, GBP, and so on
    // console.log(currency.name);      // Output: The name of the currency
    // console.log(currency.symbol);    // Output: The symbol of the currency
  }
}

const handleChange=(e)=>{
 
}

  return (
    <div>
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
    <p>Here is the language model </p>
    <b > {myData.languages && myData.languages[Object.keys(myData.languages)[0]]}</b> */}
   
   <b > {myData.languages && myData.languages[Object.keys(myData.languages)[0]]}</b>
<br />
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
    
</div>


<div>
      <Button color="danger" onClick={toggle}>
        ADD
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {isUpdating ? 'Edit Language' : 'Add Language'}
        </ModalHeader>
        <ModalBody>
          <Label for="languageInput">Language:</Label>
          <Input
            type="text"
            id="languageInput"
            value={languageInput}
            onChange={(e) => setLanguageInput(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleAddLanguage(country)}>
            {isUpdating ? 'Update' : 'Add'}
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    </div>
  )
}

export default DetailCountry
