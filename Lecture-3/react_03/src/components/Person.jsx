function Person({name,age,favColor}) { // destructuring the object props
    console.log(name);
    console.log(age); 
    console.log(favColor);  
  return (
    <div>
        <h1>Name: {name} </h1>
        <h1>Age: {age} </h1>
        <h1>FavColor: {favColor} </h1>
    </div>
  )
}
export default Person
// --------------------------------------
// function Person(props) { // props is always object
//     console.log(props.name);
//     console.log(props.age); 
//     console.log(props.favColor); 
    
//   return (
//     <div>
//         <h1>Name: {props.name} </h1>
//         <h1>Age: {props.age} </h1>
//         <h1>FavColor: {props.favColor} </h1>
//     </div>
//   )
// }

// export default Person