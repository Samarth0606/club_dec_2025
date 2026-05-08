import React, {useContext, useState } from 'react'
import { CountContext } from '../Context';
function PropDrilling() {
   let [count,setCount] = useState(0);

  return (
    <div>
        <CountContext.Provider value={count}>
            <Count setCount={setCount} />
        </CountContext.Provider>
    </div>
  )
}
function Count({setCount}){
    return(
        <div> 
            <CounterRender />
            <Buttons setCount={setCount} />
        </div>
    )
}
function CounterRender(){
    let count = useContext(CountContext)
    return(
        <h1>Count: {count}</h1>
    )
}
function Buttons({setCount}){
    let count = useContext(CountContext)
    return(
        <div> 
            <button onClick={()=>setCount(count+1)} >Inc</button>
            <button onClick={()=>setCount(count-1)} >Dec</button>
        </div>
    )
}
export default PropDrilling