import React, {  useEffect, useState } from 'react'

function UseEffectWithCondition() {

    const [number, setNumber] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log('UseEffect - updating document title');
        document.title = `Foooooood App Clicked ${number} times`
    },[number])

  return (
    <div>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <button onClick={() => setNumber(number + 1)}> Clicked {number} times</button>
    </div>
  )
}

export default UseEffectWithCondition