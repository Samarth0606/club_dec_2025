import { useState } from "react"

function Jump() {
    const [count,setCount] = useState(0);

    function handleInc(){
        // setCount(count+1)
        setCount((count)=>count+1) //hold the ref of previous value use cb fn
        // setCount(count+1)
        setCount((count)=>count+1) //hold the ref of previous value use cb fn
        // setCount(count+1)
        setCount((count)=>count+1) //hold the ref of previous value use cb fn
    }
    function handleDec(){
        console.log(count , "before");
        setCount(count-1)
        setCount(count-1)
        setCount(count-1)
        console.log(count , "after");
    }

  return (
    <div>
        <button onClick={handleInc}>+</button>
        <h2>{count}</h2>
        <button onClick={handleDec}>-</button>
    </div>
  )
}

export default Jump