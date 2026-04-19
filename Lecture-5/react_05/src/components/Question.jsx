// Given an array of objects with cartoon character details 
// as: id, name, superpower, magnitude. Build a 
// React component and display all details of those 
// characters whose magnitude is greater than 5



function Question( {myCartoon} ) {
    // variable , if-else , for , while , console

  return ( //map , filter , ternary
    <div>
        {
            myCartoon.map((item)=>{
            // return item.magnitude>5 ? truthy : falsy  //ternary
                return item.magnitude>5 ? (
                        <div style={{border:'2px solid black',color:'red',margin:'5px'}} >
                            <h1>NAME: {item.name} </h1>
                            <h1>SUPERPOWER: {item.superpower} </h1>
                            <h1>MAGNITUDE: {item.magnitude} </h1>
                        </div>
                    ) : null
                    
            })
        }
    </div>
  )
}

export default Question




// function Question( {myCartoon} ) {
//     // variable , if-else , for , while , console

//   return ( //map , filter , ternary
//     <div>
//         {
//             myCartoon.map((item)=>{
//                 if(item.magnitude>5){
//                     return(
//                         <div style={{border:'2px solid black',color:'red',margin:'5px'}} >
//                             <h1>NAME: {item.name} </h1>
//                             <h1>SUPERPOWER: {item.superpower} </h1>
//                             <h1>MAGNITUDE: {item.magnitude} </h1>
//                         </div>
//                     )
//                 }
//             })
//         }
//     </div>
//   )
// }

// export default Question