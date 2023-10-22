import React, {useState} from 'react'
import UesEffectOneTime from '../UesEffectOneTime/UesEffectOneTime';

function UseEffectWithCleanUp() {

    const [flag, setFlag] = useState(true);
 
  return (
    <div>
        <button onClick={() => setFlag( !flag )}>Toggle Flag</button>
        {flag ? <UesEffectOneTime /> : null}
    </div>
  )
}

export default UseEffectWithCleanUp;