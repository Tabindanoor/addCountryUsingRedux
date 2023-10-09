

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


// function ot() {
//   let value = 10;
//   return function inn() {
//   return value;
//   };
//   }
  
//   const cF = ot();
//   const value = 20;
  
//   console.log(cF())



// const x = 10;
// const y = (function() {
// return function(x) {
// console.log(x);
// };
// })();
// y(20);