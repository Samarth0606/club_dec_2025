import { useState } from "react"

function Batching() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("sam");

    function handleClick(){
        //batching = grouping all the rerenders together
        setCount((count)=> count+1) // state change
        setCount((count)=> count+1) // state change
        setCount((count)=> count+1) // state change
        setName("lolipop") // state change
    }

  return (
    <div>
        <button onClick={handleClick} >+</button>
        <h1>Count: {count}</h1>
        <h2>Name: {name}</h2>
    </div>
  )
}

export default Batching