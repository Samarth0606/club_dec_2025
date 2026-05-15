const fs = require('fs');

// ----- create --------
// let dataa = "Hey i am Code Baithak";
// let dataaa = "Namaste how r u?"
// fs.writeFileSync('sam.txt' , dataa )
// fs.writeFileSync('sam.txt' , dataa , {encoding:"utf-8"} )

// fs.writeFile('mav.txt' , dataaa , {encoding:"utf-8"} , (err)=>{
//     if(err) throw err
//     else{
//         console.log('file written successfully');  
//     }
// })

// -------- read ----------

// let d = fs.readFileSync('sam.txt' , {encoding:'utf-8'})
// let d = fs.readFileSync('sam.txt')
// console.log(d.toString());

// fs.readFile('mav.txt' , {encoding:"utf-8"} , (err,data)=>{
//     if(err) throw error
//     else{
//         // console.log(data.toString()); 
//         console.log(data); 
//     }
// })

// update
// fs.appendFileSync('sam.txt' , "maverick woof woof" , {encoding:"utf-8"})
// fs.appendFileSync('sam.txt' , "\nmaverick woof woof")

// fs.appendFile('mav.txt' , "\nballe balle" , {} , (err)=>{
//     if(err) throw err
//     else{
//         console.log("File written successfully");
//     }
// })


// delete
// fs.unlinkSync('sam.txt')
fs.unlink('mav.txt' , ()=>{
    console.log("deleted successfully");
})




