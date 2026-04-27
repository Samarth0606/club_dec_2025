import React, { useMemo, useState } from 'react'

function UseMemoo() {
    const [count,setCount] = useState(0);
    const [inp,setInp] = useState(0);
    
    const memoCount = useMemo(()=>{
        let sum = 0;
        for(let i=1;i<=inp;i++){
            console.log("loop ran");
            sum+=i;
        }
        return sum;
    } , [inp])

  return (
    <div>
        <input value={inp} onChange={(e)=>setInp(e.target.value)} type="number" />
        <h1>Sum:{memoCount} </h1>

        <button onClick={()=>setCount(count+1)}>Inc - {count}</button>
    </div>
  )
}

export default UseMemoo