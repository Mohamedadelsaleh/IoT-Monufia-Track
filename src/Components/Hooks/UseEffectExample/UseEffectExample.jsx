import React, { useState, useEffect } from 'react'

function UseEffectExample() {

    const initialValue = 0;
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        document.title = `Food App Clicked ${counter} timer`
    })

  return (
    <div>
        <h3> Counter : {counter}</h3>
        <button onClick={() => setCounter(counter + 1) }>Clicked {counter} times </button>
    </div>
  )
}

export default UseEffectExample