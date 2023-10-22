import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { Link, useParams } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { updateLanguage, addLanguage } from '../store/Slice';

const DetailCountry = ({args, country}) => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const [language, setLanguage] = useState("");
// this is the data from which i am displaying the specific country details on screen
    const myData = useSelector(state=>state.api[id] )

    
    const addedLanguages = myData.languages;
    console.log(addedLanguages,"ye");
    


    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal);
for (const currencyKey in myData.currencies) {
  if ( myData && myData.currencies.hasOwnProperty(currencyKey)) {
    const currency = myData.currencies[currencyKey];
    // console.log(currencyKey);        // Output: USD, EUR, GBP, and so on
    // console.log(currency.name);      // Output: The name of the currency
    // console.log(currency.symbol);    // Output: The symbol of the currency
  }
}

// languages from the selector of the apis




// const dispatch = useDispatch();
// const { id } = useParams();
// const [language, setLanguage] = useState("");
// const [modal, setModal] = useState(false);
// const myData = useSelector(state => state.api[id]);
// const addedLanguages = myData.languages;

// const toggle = () => setModal(!modal);

const handleChange = (e) => {
  setLanguage(e.target.value);
};

const handleAddLanguage = () => {
  if (language.trim() !== '') {
    // Dispatch the addLanguage action to add the new language to the Redux store
    dispatch(addLanguage({ id, language }));
    setLanguage(''); // Clear the input field
    toggle(); // Close the modal
  }
};

const handleUpdateLanguage = () => {
  if (language.trim() !== '') {
    // Dispatch the updateLanguage action to update the language in the Redux store
    dispatch(updateLanguage({ id, language }));
    setLanguage(''); // Clear the input field
    toggle(); // Close the modal
  }
};

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
   {
      myData.languages && Object.keys(myData.languages).length > 0 && (
        <b>{myData.languages[Object.keys(myData.languages)[0]]}</b>
      )
    }
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
    <Input onChange={(e)=>handleChange(e)}  value={language} />

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
    </div>  */}

<div>
      {/* ... Your other content ... */}
      <Button color="danger" onClick={toggle}>
        ADD
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal Languages</ModalHeader>
        <ModalBody className='flex justify-content-between'>
          <b > {myData.languages && myData.languages[Object.keys(myData.languages)[0]]}</b>
          <br />
          <Button color='warning' onClick={handleUpdateLanguage}>
            Update
          </Button>
          <br />
          <Label for="exampleEmail">ADD language</Label>
          <Input onChange={(e) => handleChange(e)} value={language} />
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
    </div>
  </div>

   </div>
  )
}
export default DetailCountry