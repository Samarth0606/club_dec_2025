// function App(){
//   return(
//     <div>
//       <h1>Anything in App</h1>
//     </div>
//   )
// }
// function Sam(){
//   return( <h1>HELLO SAM</h1> )
// }

// function Vohra(){
//   return( <h1>HELLO VOHRA</h1> )
// }

// export {Sam , Vohra} //named export - infinite

// export default App; //only 1 default export is possible




// named export
// export function Sam(){
//   return( <h1>HELLO SAM</h1> )
// }

// export function Vohra(){
//   return( <h1>HELLO VOHRA</h1> )
// }

// ------------------------

// import { Golden, Div, Pitbull } from "./components/Dog"
import Golden, { Div, Pitbull } from "./components/Dog"
import Pig from "./components/Pig"
import Cat from "./components/cat"

function App() {
  return (
    <div>
      <Golden />
      <Div/>
      <Pitbull />
      <Cat />
      <Pig />
    </div>
  )
}

export default App