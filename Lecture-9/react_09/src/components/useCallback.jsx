import { memo, useCallback, useState } from "react";

function UseCallback() {
    const [count,setCount] = useState(0);
    // let a = 100;
    // let a = function(){ console.log("heyy") };
    let a = useCallback( function(){ console.log("heyy") } , [])
  return (
    <div>
        <Chotu sam={a}  />
        <button onClick={()=>setCount(count+1)}>CLICK - {count}</button>
    </div>
  )
}
const Chotu = memo(
    function({sam}){
        return(
            <div>
                {/* <h1>Hello - {sam}</h1> */}
                <h1>Hello - {sam()}</h1>
            </div>
        )
    }
)

export default UseCallback