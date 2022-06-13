// console.log(`hey ninjas`)

// setTimeout(function(){
//     console.log(`3 seconds have passed`)
// }, 3000);

// var time = 0;

// var timer = setInterval(function(){
//     time+=2;
//     console.log(time +` seconds have passed`)
//     if(time>5){
//         clearInterval(timer)
//     }
// }, 2000);
// console.log(__dirname);
// console.log(__filename);
// function sayHi(){
//     console.log(`hi`);
// }
// sayHi();
// var sayBye = function(){
//     console.log(`bye`);
// };
// sayBye();

// function callFunction(fun){
//     fun();
// }
// callFunction(sayBye);
var stuff = require(`./stuff`);

console.log(stuff.counter([`shaun`,`crystal`,`ryu`]));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,5));
