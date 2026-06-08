// let a:number = 10; //automatically taking it => inference (interview)
// console.log(a);
// // a = "sam";
// a = 2394;
// console.log(a);


// -------------------------


// function greet(name:string){
//     console.log(`hello from ${name}`);
    
// }
// greet("sam")

// -------------------------

// function greet(a:number , b:number):number{
//    return a+b
// }
// greet(12 , 34)

// -------------------------

// function age(a:number):boolean{
//     if(a>18){
//         return true
//     }else{
//         return false
//     }
// }
// let out:boolean = age(19)

// console.log(out);

// -------------------------


// function runAfter1Sec(fn:()=>void):number{
//     setTimeout(()=>{
//         fn();
//     } , 1000)
//     return 10;
// }
// function called(){
//     console.log("hey there...");
// }

// let out:number = runAfter1Sec(called)


// -------------------------

// function runAfter1Sec(fn:()=>number):number{
//     setTimeout(()=>{
//         fn();
//     } , 1000)
//     return 10;
// }
// function called(){
//     console.log("hey there...");
//     return 500;
// }

// let out:number = runAfter1Sec(called)

// -------------------------

// let sam = ()=>{
//     console.log("hello");
// }

// sam();

// -------------------------

// function greet(name){
//     console.log(`hello from ${name}`);
    
// }
// greet("sam")



