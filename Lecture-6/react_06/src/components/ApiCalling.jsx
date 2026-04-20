import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ApiCalling() {

    const [todo,setTodo] = useState([]);
    
    useEffect( ()=>{
        let API = "https://jsonplaceholder.typicode.com/todos"
        async function calling(){
            let resp = await axios(API); //entire data 
            // let finalData = await resp.json();
            console.log(resp.data);
            setTodo(resp.data)
        }
        calling()
    } , [] )

  return (
    <div>
        {
            todo.map((item)=>{return(
                <div>
                    <h1>{item.title}</h1>
                </div>
            )})
        }
    </div>
  )
}

export default ApiCalling

// ---------------------------------------------


// import React, { useEffect, useState } from 'react'

// function ApiCalling() {

//     const [todo,setTodo] = useState([]);
    
//     useEffect( ()=>{
//         let API = "https://jsonplaceholder.typicode.com/todos"
//         async function calling(){
//             let resp = await fetch(API);
//             let finalData = await resp.json();
//             console.log(finalData);
//             setTodo(finalData)
//         }
//         calling()
//     } , [] )

//   return (
//     <div>
//         {
//             todo.map((item)=>{return(
//                 <div>
//                     <h1>{item.title}</h1>
//                 </div>
//             )})
//         }
//     </div>
//   )
// }

// export default ApiCalling