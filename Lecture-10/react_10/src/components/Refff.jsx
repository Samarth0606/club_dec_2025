import React, { useRef, useState } from 'react'

function Refff() {
    const [count, setCount] = useState(0);
    const counterRef = useRef(0);

    function handleRef(){
        counterRef.current++
    }

  return (
    <div>
        <button onClick={handleRef}>Ref-btn: {counterRef.current}</button>
        <br />
        <button onClick={()=>setCount(count+1)}>Inc - {count}</button>
    </div>
  )
}

export default Refff