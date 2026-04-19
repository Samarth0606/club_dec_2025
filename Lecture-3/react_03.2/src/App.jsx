import Cat, { Dog } from "./components/Cat"
import Person from "./components/Person"
import Types from "./components/Types"

//default export => only 1 possible
function App() {
  return (
    <section>
      {/* <Types /> */}
      <div>App</div>
      <Person 
        naam="SAM" 
        umar={10} 
        // isMale={true} 
        insta="code_baithak"
      />
      <Person 
        naam="MAV" 
        umar={5} 
        // isMale={true} 
        insta="mee_maverick"
      />
      {/* <Cat />
      <Dog /> */}
    </section>
  )
}
export default App

// -----------------------------

// //named export => import {}
// export function App() {
//   return (
//     <div>App</div>
//   )
// }

// -----------------------------

// //named export
// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export {App}