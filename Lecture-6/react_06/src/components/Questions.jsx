import { useState } from "react"

function Questions() {
    const [count,setCount] = useState(0); //initial

    function handleClick(){
        setCount((count)=> count+1) // 1
        setCount(count+1) //   1
        setCount((count)=> count+2)  // 3
    }

  return (
    <div>
        <button onClick={handleClick}>+</button>
        <h1>Count: {count}</h1>
    </div>
  )
}

export default Questions

// -----------------------------------------------

// import { useState } from "react"

// function Questions() {
//     const [count,setCount] = useState(0); //initial

//     function handleClick(){
//         setCount((count)=> count+1) // 1
//         setCount((count)=> count+2) // 3
//         setCount(count+1) // 1
//     }

//   return (
//     <div>
//         <button onClick={handleClick}>+</button>
//         <h1>Count: {count}</h1>
//     </div>
//   )
// }

// export default Questions

// --------------------------------------------------

// import { useState } from "react"

// function Questions() {
//     const [count,setCount] = useState(0); //initial

//     function handleClick(){
//         setCount(count+1) // 1
//         setCount((count)=> count+1) // 2
//         setCount((count)=> count+1) // 3
//     }

//   return (
//     <div>
//         <button onClick={handleClick}>+</button>
//         <h1>Count: {count}</h1>
//     </div>
//   )
// }

// export default Questions

// ---------------------------------------------------


// import { useState } from "react"

// function Questions() {
//     const [count,setCount] = useState(0); //initial

//     function handleClick(){
//         setCount((count)=> count+1) // prev // 1
//         setCount(count+1) // initial // 1 
//         setCount((count)=> count+1) // prev // 2 dominating
//     }

//   return (
//     <div>
//         <button onClick={handleClick}>+</button>
//         <h1>Count: {count}</h1>
//     </div>
//   )
// }

// export default Questions