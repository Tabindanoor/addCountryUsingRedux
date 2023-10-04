import React,{useState} from 'react'
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap'

const Main = () => {
    const [country,setCountry] = useState("")
    const handleChange=(e)=>{
        setCountry(e.target.value);
        console.log(e.target.value)
    }

    const handleAdd=async(name)=>{
        const response = await "https://restcountries.com/v3.1/all/";
    // const mydate = await response.name.common;
    console.log(response.data)
    }       

  return (
    <div>
        <h1 className="text-center text-xl">Welcome to the main page</h1><br/>
        

  <InputGroup>
    
    <Input type='text' onChange={(e)=>{handleChange(e)}} name='countryname' />
    <Button onClick={handleAdd} value={country} >
     ADD COUNTRY
    </Button>
  </InputGroup>


        
    </div>
  )
}

export default Main
