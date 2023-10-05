import axios from 'axios'
import React, { useState } from 'react'
import Actions from '../store/Actions'
import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux/es/hooks/useSelector'

const Main = () => {


    const dispatch = useDispatch()
    const [country,setCountry] = useState("")
    const handleChange =(e)=>{
        setCountry(e.target.value)
        console.log(e.target.value)
    }
    const handleAddCountry=()=>{
        if(country.trim()!=="") 
        dispatch(Actions(country)) 
        setCountry("")
    }

    const countires = useSelector((state)=>{console.log(state.countires)})
  return (
    <div>
        <h1>Add Country Name Using Redux</h1>
        <br />
        <label htmlFor="" >ADD COUNTRY</label>
        <br />
        <input type="text" name="country" id="" value={country} onChange={(e)=>handleChange(e)} />
        <br />
        <button onClick={handleAddCountry}>ADD + </button>

        {
            countires.map((country)=>{
                return (
                    <div>       
                        <li>{country.name}</li>
                    </div>
                )
            })
        }


    </div>
  )
}

export default Main
