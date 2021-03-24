import React, { useState } from 'react'
import './App.css'

const Box = () => {
  const colors = [
    'red',
    'yellow',
    'orange',
    'green',
    'blue',
    'indigo',
    'violet'
  ]

  const [colorName, setColorName] = useState('Randomize Color')

  const randomizeColor = () => {
    return setColorName(colors[Math.floor(Math.random() * 7)])
  }

  return(
    <>
      <button onClick={ randomizeColor } style={{backgroundColor: colorName}}>
        { colorName }
      </button>
    </>
  )
}

export default Box