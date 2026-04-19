import { useState } from "react";

function ChangeName() {
    // let user = "CODE BAITHAK";
    const [user,setUser] = useState("CODE BAITHAK")

    function clickBtn(){
        // user = "Anonymous" // ❌
        setUser("Anonymous") // ✅
    }

  return (
    <div>
        <h1>NAME: {user}</h1>
        <button onClick={clickBtn} >LOGOUT</button>
    </div>
  )
}

export default ChangeName