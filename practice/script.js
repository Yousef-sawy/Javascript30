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


// const add = require("./add");

// console.log("hello test here")
// const sum = add(1,3);
// console.log(sum)


// let num = [1,2,3,4,5];
// // num.forEach(function(num , index) {
// //     console.log(`the number ${num} is at index ${index}`);
// // });

// num.forEach((num ,index) => {
//     console.log(`the number ${num} is at index ${index}`);
// });


// const random = document.getElementById("randomButton");
// const labelnum = document.getElementById("label")
// const min = 1;
// const max = 6;


// let randomNum;

// random.onclick = function(){
//     randomNum = Math.floor(Math.random() * max) + min;
//     labelnum.textContent = randomNum;

// };

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const result = document.getElementById("result");

// let age;

// mySubmit.onclick = function(){

//     age = myText.value;
//     age = Number(age);
//     if(age >= 100){
//         result.textContent =`You are TOO OLD to enter this site`;
//     }
//     else if(age == 0){
//         result.textContent = `You can't enter. You were just born.`
//     }
//     else if(age >= 18){
//         result.textContent = `You are old enough to enter this site`
//     }
//     else if(age < 0){
//         result.textContent = `Your age can't be below 0`;
//     }
//     else{
//         result.textContent = `You must be 18+ to enter this site`;
//     }
// };

// let age = 4;
// let mesg = age >= 18 ? "adult" : "minor";
// console.log(mesg)


// let time = 16;
// let greeting  = time < 12 ? "morning" : "afternoon";
// console.log(greeting)

// let purchase = 99;
// let discount = purchase >= 100 ? 10 : 0;
// console.log(`your total amount is ${purchase - purchase * (discount/100) }`)



// let score = 120 ;
// let grade ;

// switch(true){
//     case score >=90:
//         grade = "A";
//         break;
//     case score >=80:
//         grade = "B";
//         break;
//     case score >=70:
//         grade = "C";
//         break;
//     case score >=60:
//         grade = "D";
//         break;
//     default:
//         grade = "failed";
// }
// console.log(grade)



// let username = "yousef";
// console.log(username.charAt(5));
// console.log(username.indexOf("y"));
// console.log(username.length);
// username = username.toLowerCase();
// username = username.toUpperCase();
// username = username.repeat(4);
// let result = username.startsWith(" ");
// let result = username.endsWith(" ");
// let result = username.includes(" ");
// console.log(result);
// console.log(username);
// let phone = "01111-37-97-20";
// phone = phone.replaceAll("-","/");
// phone = phone.padStart(16,"/");
// phone = phone.padEnd(16,"/");

// const name = "yousef ashraf";

// // let fisrtName = name.slice(0,1);
// // console.log(fisrtName);

// let nam = name.slice(0, name.indexOf(" "))
// console.log(nam);

// const email = "yousef@gmail.com";

// let name = email.slice(0,email.indexOf("@"))
// let exten = email.slice(email.indexOf("@"))
// console.log(name)
// console.log(exten)


// let username = window.prompt("enter you name")

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toLocaleUpperCase();

// let extrachar = username.slice(1);
// extrachar = extrachar.toLowerCase();
// username = letter + extrachar;



// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username)









// const minNum = 1 ;
// const maxNum = 100 ;

// const answer = Math.floor(Math.random() *(maxNum - minNum + 1)) + minNum;
// // console.log(answer)
// let attempt = 0;
// let guess;
// let running = true;

// while(running){
//     guess = window.prompt(`guess a number between ${minNum} to ${maxNum}`);
//     guess = Number(guess)
    
//     if(isNaN(guess)){
//         window.alert("Enter a valid number");
//     }
//     else if( guess < minNum || guess > maxNum){
//         window.alert("Enter a valid number in the given range");
//     }
//     else{
//         attempt++;
//         if(guess < answer){
//             window.alert("too low try again");
//         }
//         else if (guess > answer){
//             window.alert("Too high! try again");
//         }
//         else{
//             window.alert(`correct the answer was ${answer} and i took you ${attempt} attempts`);
//             running = false;
//         }
//     }
// }



// function happybirthday(){
//     console.log("happy birthday to you")
//     console.log("happy birthday to you")
//     console.log("happy birthday to you")
//     console.log("happy birthday to you")

// }

// happybirthday();

// function isEven(num){
//     return num % 2 === 0 ? true : false;
// }

// console.log(isEven(4))


// let fruits = ["apple","banana","orange","ay7aga"]


// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);

// let num = a.length;
// let index = a.indexOf(5)
// console.log(index)

// for(let i = a.length - 1 ; i >= 0; --i){
//     console.log(a[i])
// }

// fruits.sort().reverse()
// fruits.reverse()

// for(let fruit of fruits){
//     console.log(fruit)
// }

// let matrix =[1,2,4];


// matrix[0][0] = "X"
// matrix[0][1] = "O"
// matrix[0][2] = "X"



// for (let row of matrix){
//     const rowString = row.join(' ');
//     console.log(rowString);
// }


// let fruits = [1,2,3]
// let veg = [4,5,6]

// let nums = [...fruits,...veg]
// console.log(nums)


// const food1 = 'pizza';
// const food2 = 'ham';
// const food3 = 'egg';
// const food4 = 'apple';


// function openfridge(...foods){
//     console.log(foods);     
// }

// openfridge(food1,food2)


// function sum(...numbers){

//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }
// function average(...numbers){

//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result /numbers.length;
// }

// const test = sum(3,3,3,3,3);
// const avg  = average(3,3,3,3,3);


// console.log(`Your test score is $${test} and ${avg}`);


function combineStrings(...strings){

    return strings.join(" ");
}

const fullName = combineStrings("Mr.","Spongebob","Squarepants","III");
console.log(fullName)
