import React from 'react'
import {useSelector, useDispatch} from "react-redux"

const DetailCountry = () => {
    const myData = useSelector(state=>state.api)
    console.log(myData)
  return (
    <div>
      

    </div>
  )
}

export default DetailCountry
