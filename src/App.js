import React, { useState } from 'react'
import Box from './Box'
import './App.css'

const App = () => {
  const [numOfBoxes, setNumOfBoxes] = useState(1)
  console.log(numOfBoxes)

  let addBox = () =>{
    return setNumOfBoxes(numOfBoxes + 1)
  }

  let removeBox = () => {
    if (numOfBoxes <= 0) {
      return
    }
    return setNumOfBoxes(numOfBoxes - 1)
  }
  
  // for (let i = 0; i > numOfBoxes; i++) {
  //   return 
  // }

  return (
    <>
      <h1>Color Box</h1>
      <Box />
      <div className='btn-container'>
        <button className='btn-add' onClick={ addBox }>
          Add Box
        </button>
        <button className='btn-rmv' onClick={ removeBox }>
          Remove Box
        </button>
      </div>
    </>
  )
}

export default App
