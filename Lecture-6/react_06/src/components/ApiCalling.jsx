import React, { useState } from 'react'

function ApiCalling() {

    let API = "https://jsonplaceholder.typicode.com/todos"
    const [todo,setTodo] = useState([]);

    async function calling(){
        let resp = await fetch(API);
        let finalData = await resp.json();
        console.log(finalData);
        // setTodo(finalData)
    }
    calling()

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