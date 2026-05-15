const fs = require('fs');

// console.log(10);
// console.log(20);
//blocking
// let d = fs.readFileSync('sam.txt' , {encoding:'utf-8'})
// console.log(d);

// console.log(30);
// console.log(40);



console.log(10);
console.log(20);
// non-blocking
fs.readFile('sam.txt' , {encoding:"utf-8"} , (err,data)=>{
    if(err) throw error
    else{
        console.log(data); 
    }
})
console.log(30);
console.log(40);