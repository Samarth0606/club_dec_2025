import React, { useState } from 'react'

function Input() {
    const [inp,setInp] = useState('');

    function handleInp(e){
        setInp(e.target.value)
    }

  return (
    <div>
        <input value={inp} onChange={handleInp} type="text" placeholder='Enter number here...' />
    </div>
  )
}

export default Input