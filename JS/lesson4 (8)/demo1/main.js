// function ezpz() {
//     document.write(`<div>1</div>`);
//     document.write(`<div>1</div>`);
//     document.write(`<div>1</div>`);
// }
//
// ezpz();
//
//
//
//
// ezpz();
//
//
//
//
//
//
// ezpz();

// function squareP(aaa, bbb) {
//     let result = (aaa + bbb) * 2;
//     return result;
// }
//
//
// let answer = squareP(10, 20);
// console.log(answer);
//
//
//
// let answer2 = squareP(100, 200);
// console.log(answer2);

// let a1 = 10;
// let b1 = 15;
// let result = (a1+b1) * 2;
// let a2 = 20;
// let b2 = 18;
// let result2 = (a2+b2) * 2;


// function divCreator(text) {
//     document.write(`<div>${text}</div>`);
// }
//
//
// divCreator("sus yooo");
// divCreator("not sus yoo");


//
// function iterator(array) {
//     for (const item of array) {
//         console.log(item);
//     }
//
// }
//
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// iterator(users);

//bad practice
// let x = 100;
//
// function iterator2(arr) {
//     for (let i = 0; i < x; i++) {
//
//     }
// }


// function calc(num1, num2, action) {
//     switch (action) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         default:
//             return NaN;
//     }
// }
//
//
// let result = calc(100, 200, "+");
// console.log(result);
//
//
// let result2 = calc(+prompt("num1"), +prompt("num2"), prompt("action"));
// console.log(result2);


// function calc2() {
//
// }
//
// calc2([10,20,30,40]);
// calc2([10,20,30]);

// function calc2(...nums) {
//     console.log(nums);
// }
//
// calc2(10,20,30,40);
// calc2(10,20,30);


// function calc2() {
//     // console.log(arguments);
//     let result = 0;
//     for (const item of arguments) {
//         // console.log(argument);
//         result = result + item;
//     }
//     return result;
// }
//
// console.log(calc2(10,20,30,40));



// function add(a, b) {
//     return a + b;
// }
//
// function minus(a,b) {
//     return a - b;
// }
//
// function multiply(a,b) {
//     return a * b;
// }
//
// function divide(a,b) {
//     return a / b;
// }
//
// // let num1 = +prompt("num1");
// // let num2 = +prompt("num2");
// // let aciton = prompt("action");
// //
// // let result = function calcMe (`${num1},${num2},${num3}`) {
// //     switch (action) {
// //         case '+':
// //             return add(num1, num2);
// //     }
// // }
// //
// // console.log(result);
//
// function calmee(num1, num2, action) {
//     switch (action) {
//         case "+":
//             return add(num1, num2);
//         case"-":
//             return minus(num1, num2);
//         case "*":
//             return multiply(num1,num2);
//         case '/':
//             return divide(num1,num2);
//         default:
//             throw new Error("wtf?");
//     }
// }
//
//
// console.log(calmee(100, 200, "+"));

