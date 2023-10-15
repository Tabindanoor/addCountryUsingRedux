

import React from 'react'
import "./App.css"
import AddCountry from './components/AddCountry'


const App = () => {

  return (
    <div className='App' style={{alignItems:"center"}}>
      <h1>This is the Country Details Add Button </h1>
      <AddCountry />
    </div>
  )
  
}

export default App

