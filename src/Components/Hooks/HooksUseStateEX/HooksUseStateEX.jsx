import React, { useState } from 'react'

function HooksUseStateEX() {
    
    const initalCounter = 0;
    const [counter, setCounter ] = useState(initalCounter)

    const handleIcreamentFive = () => {
        setCounter(prevCouter => prevCouter + 5) // best practice
        // setCounter(counter + 5) its Okay

    }

  return (
    <div>
        <h1> HooksUseStateEX {counter} </h1>
        <button onClick={()=> setCounter(counter + 1)}> Hooks Increase</button>
        <button onClick={()=> setCounter(counter - 1)}> Hooks Decrease</button>
        <button onClick={()=> setCounter(initalCounter)}> Hooks Reset</button>
        <button onClick={handleIcreamentFive}> Hooks Increase by 5</button>
        <button> Hooks decrease by 5</button>
    </div>
  )
}

export default HooksUseStateEX