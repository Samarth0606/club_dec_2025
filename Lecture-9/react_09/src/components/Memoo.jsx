import { memo, useState } from "react"

function Memoo({username}) {
    const [naam, setNaam] = useState(username);
    function handleClick(){
        setNaam(Math.floor(Math.random()*10))
    }
  return (
    <div>
        <Chotu user={naam} />
        <button onClick={handleClick}>Click me!!</button>
        <Chotu user="Maverick" />
        <Chotu user="Vohra" />
    </div>
  )
}
const Chotu = memo( function({user}){
    return(
        <div>
            <h1>Chotu: {user} </h1>
        </div>
    )
} )

export default Memoo