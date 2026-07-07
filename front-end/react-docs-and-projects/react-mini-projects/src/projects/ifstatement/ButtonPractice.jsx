import React, { useState } from 'react'

export default function() { 
const [number, setNumber] = useState(0);
 
const handleAddByOne = () => setNumber(number => number+ 1)

  return (
    <div>
        <p>{number}</p>
        <button type='button' onClick={handleAddByOne}>Add</button>
    </div>
  )
}
