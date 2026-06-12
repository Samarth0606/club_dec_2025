

// let user = {
//     firstName: "Sam",
//     lastName: "Vohra",
//     age: 11,
//     isMale: true
// }

// function isLegal(user: {
//     firstName: string,
//     lastName: string,
//     age: number,
//     isMale: boolean
// }){
//     if(user.age > 18){
//         return true
//     }else{
//         return false
//     }
// }

// isLegal(user)

// -----------------------------------

// let user = {
//     firstName: "Sam",
//     lastName: "Vohra",
//     age: 11,
//     isMale: true
// }

// let user2 = {
//     firstName: "Sam",
//     lastName: "Vohra",
//     age: 11
// }

// interface User{
//     firstName: string,
//     lastName?: string,
//     age: number,
//     isMale?: boolean
// }

// function isLegal(user: User){
//     if(user.age > 18){
//         return true
//     }else{
//         return false
//     }
// }

// isLegal(user2)
// isLegal(user)

// -----------------------------------
// interface Person{
//     name: string,
//     age: number,
//     greet(phrase: string): void
// }
// class Student implements Person{
//     name: string;
//     age: number;
//     constructor(n:string , a:number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} ${this.name}`);
        
//     }
// }

// let s1 = new Student("Sam" , 11 )
// s1.greet("heyy from");
// s1.greet(21);


// -----------------------------------


// function sam(id:number | string | boolean){
//     console.log(id);
// }
// sam(1)
// sam("1")
// sam(true)


// -----------------------------------
// union
// type Id = number | string | boolean;

// function sam(id: Id ){
//     console.log(id);
// }
// sam(1)
// sam("1")
// sam(true)

// // intersection

// type Dsa = {teacher: string , leetcode: number}
// type Web = {teacher: string , project: number}
// type Samarth = Dsa & Web;

// const samm: Samarth = {
//     teacher: "SAM",
//     leetcode: 100,
//     project: 20
// }

// -----------------------------------
// arrays

// let arr = [10,20,30,40,50];

// function maxi(arr: number[]){
//     let max= 0;
//     for(let item of arr){
//         if(item>max){
//             max = item;
//         }
//     }
//     return max;
// }

// console.log(maxi(arr))

// -----------------------------------

// let users = [{name: "Sam" , age: 20}]
// interface User{
//     name: string,
//     age: number
// }

// function isLegal(users: User[]){
//     for(let item of users){
//         if(item.age> 18){
//             console.log(true)
//         }else{
//             console.log(false)
//         }
//     }
// }

// isLegal(users)

// -----------------------------------

// type Key = "up" | "down" | "left" | "right"
// function doSomething(keyPressed: Key){
//     if(keyPressed === "up"){
//         console.log("UP");
//     }else if(keyPressed === "down"){
//         console.log("DOWN");
//     }
// }

// doSomething("up")
// doSomething("down")
// doSomething("chandigarh")


// -----------------------------------
enum Direction{
    up,
    down,
    left,
    right
}
function doSomething(keyPressed: Direction){
    if(keyPressed === Direction.up){
        console.log("UP");
    }else if(keyPressed === Direction.down){
        console.log("DOWN");
    }
}
console.log(doSomething(Direction.up))
console.log(doSomething(Direction.down))
console.log(doSomething(Direction.left))