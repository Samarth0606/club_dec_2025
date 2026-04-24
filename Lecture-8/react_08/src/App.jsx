// --------CLASS BASED COMPONENT--------
// import React from "react";
// import { Counter } from "./components/Counter";


// export default class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       count: 0,
//     }
//   }
//   componentDidMount(){
//     console.log("COMPONENT BANN GYA PEHLI BAAR");
//   }
//   decrement(){
//     this.setState({count: this.state.count-1})
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={ this.decrement.bind(this) } >Dec</button>
//         <Counter count={this.state.count} />
//         <button onClick={()=>this.setState({ count:this.state.count+1 })} >Inc</button>
//         <h1>Hello from h1 of class</h1>
//       </div>
//     )
//   }
// }

// --------FUNCTIONAL COMP---------
import Counting from "./components/Count"

function App() {
  return (
    <div>
      <Counting />
    </div>
  )
}

export default App