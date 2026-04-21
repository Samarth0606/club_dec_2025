import { useEffect, useState } from "react"

function Timer() {

    const [count,setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        } , 1000)
    } , [count])

  return (
    <div>Timer:{count}</div>
  )
}

export default Timer

// -----------------------------

// import { useEffect, useState } from "react"

// function Timer() {

//     const [count,setCount] = useState(0);

//     useEffect(()=>{
//         let idd = setInterval(()=>{
//             setCount(count+1)
//         } , 1000)
//         return ()=>clearInterval(idd) //cleanup fn
//     } , [count])

//   return (
//     <div>Timer:{count}</div>
//   )
// }

// export default Timer