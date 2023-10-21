import React, { useState } from 'react'

function UseStateWithObjs() {

    const [name, setName] = useState({fname: "", lname: ""});

    const handelChangeFname = (event) => {
        setName({...name, fname: event.target.value})
    }

    const handelChangeLname = (event) => {
        setName({...name, lname: event.target.value})
    }


  return (
    <div>
            <input type='text' value={name.fname} onChange={handelChangeFname} />
            <input type='text' value={name.lname} onChange={handelChangeLname} />
            <h2>Your First Name is: {name.fname}</h2>
            <h2>Your Last Name is: {name.lname}</h2>
            <h1>{JSON.stringify(name)}</h1>

    </div>
  )
}

export default UseStateWithObjs