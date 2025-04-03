//practice 1
// let username;
// document.getElementById("submit").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);

//     document.getElementById("myH1").textContent =  `Hello ${username}`


// }



//practice 2
// const PI = 3.143

// document.getElementById("mySubmit").onclick = function(){

//     radius = document.getElementById("myRadius").value;
//     radius = Number(radius);
//     circumfrance = 2 * PI * radius;
//     console.log(circumfrance)
//     document.getElementById("myH3").textContent =  `the circumfrance is = ${circumfrance}`
// }


// console.log(Boolean(''))

// const arrowSum = (a,b) =>{ 
//     return a + b
// }

// const arrowSum = num => num + 25

// sum = arrowSum(25,25)
// console.log(sum)

// function testScope() {
//     var x = "Function var";  
//     let y = "Function let";  
//     const z = "Function const";  
// }

// testScope();

// console.log(x); // ❌ Error: x is not defined  
// console.log(y); // ❌ Error: y is not defined  
// console.log(z); // ❌ Error: z is not defined  


// let a = 10 ;
// function outer(){
//     let b = 20
//     function inner(){
//         let c = 30
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()


// function outer (){
//     let counter = 0 
//     function inner(){
//         counter++
//         console.log(counter)                
//     }
//     inner()
// }
// outer()


// function sayName(name){
//     console.log(`my name is ${name}`)
// }
// sayName("sawy")
// sayName("yousef")



//implicit binding
// const person ={
// name: 'sawy',
//     sayName: function (){
//         console.log(`my name is ${this.name}`)
//     },
// }
// person.sayName()



//explicit binding
// const person ={
//     name: 'sawy'    
// }
// function sayMyName (){
//     console.log(`my name is ${this.name}`)
// }
// sayMyName.call(person)


// new binding
// function Perosn1 (name){
//     this.name = name
// }
// const p1 = new Perosn1("mee")
// console.log(p1.name)

// sayMyname()






// function great(){
//     console.log(`hello`)
// }
// setInterval(great,2000)



// function great(name){
//     console.log(`hello ${name}`)
// }
// setTimeout(great, 2000, 'sawy


// const promis = new Promise((resolve , reject) =>{

// })

// async function great(){
//     return Promise.resolve("hello")
// }
// great()
//     .then((value) => console.log(value))


// const p1 = Promise.resolve("✅ Resolved 1");
// const p2 = Promise.resolve("✅ Resolved 2");
// const p3 = Promise.reject("❌ Rejected 3");

// Promise.all([p1, p2, p3])
//     .then(results => console.log(results))
//     .catch(error => console.log("Error:", error)); 


// Promise.allSettled([p1, p2, p3])
//     .then(results => console.log(results))
//     .catch(error => console.log("Error:", error)); 




// async function task(name, delay) {
//     await new Promise(resolve => setTimeout(resolve, delay));
//     console.log(`${name} completed in ${delay}ms`);
// }

// // ✅ Sequential Execution (Defined Manually)
// async function sequential() {
//     await task("Task 1", 2000);
//     await task("Task 2", 1000);
//     await task("Task 3", 500);
// }

// // ✅ Concurrent Execution (Tasks start together but finish separately)
// async function concurrent() {
//     const t1 = task("Task 1", 2000);
//     const t2 = task("Task 2", 1000);
//     const t3 = task("Task 3", 500);
    
//     await t1; 
//     await t2; 
//     await t3;
// }

// // ✅ Parallel Execution (Using Built-in `Promise.all`)
// async function parallel() {
//     await Promise.all([
//         task("Task 1", 2000),
//         task("Task 2", 1000),
//         task("Task 3", 500)
//     ]);
// }


const add = require("./add");

console.log("hello test here")
const sum = add(1,3);
console.log(sum)