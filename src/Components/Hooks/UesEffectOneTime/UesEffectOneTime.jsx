import React, { useEffect, useState } from 'react'

function UesEffectOneTime() {

    const [x, setX]= useState(0);
    const [y, setY]= useState(0);
    
    useEffect(() => {
        console.log('UseEffect Runs');
        window.addEventListener('mousemove', handleMousePosition)

        return(() => {
            console.log('Compenet cleaned Up removed unmounting');
            window.removeEventListener('mousemove', handleMousePosition)
        })

    }, [])

    const handleMousePosition = (e) => {
        console.log('Mouse Moves');
        setX(e.clientX)
        setY(e.clientY)
    }

  return (
    <div>
        value of X - {x}, and Value of Y - {y}
    </div>
  )
}

export default UesEffectOneTime;