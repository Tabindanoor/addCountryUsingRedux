import React from 'react'
// because of thunk
const ADD_COUNTRY=()=>async(dispatch,state)=>{
    const response = await "https://restcountries.com/v3.1/all";
    const mydate = await response.name.common;
    console.log(mydate)
}

const Actions = () => {
  return (
    <div>

    </div>
  )
}

export default Actions
