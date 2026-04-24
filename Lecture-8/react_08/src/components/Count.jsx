import { useEffect, useState } from "react"

function Counting() {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        if(count === 0){
            console.log("component did mount");
        }
        else if(count>0 && count<=5){
            console.log("component did update");   
        }
        else if(count === 6){
            return ()=>console.log("component will unmount");
        }
    } , [count])

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default Counting