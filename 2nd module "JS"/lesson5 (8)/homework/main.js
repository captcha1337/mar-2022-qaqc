// let array = [1, 2, 3, 4];
//
// let aver = (arr) => {
//     sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum/arr.length;
// }
//
// console.log(aver(array));

////////////////////////////////////////////////////////////////////////// 3 < 0

// let minMax = (...arg) => {
//     //console.log(arg);
//     let min = arg[0];
//     let max = arg[0];
//     for (const argElement of arg) {
//
//         if (argElement < min) {
//             min = argElement;
//         }
//         if (argElement > max) {
//             max = argElement;
//         }
//
//     }
//     console.log(max);
//     return min;
//
// }
//
// console.log(minMax(3, 1, 6, 10, -2, 3, 2));

///////////////////////////////////////////////////////////////////


// let random = () => {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random() * 100));
//
//     }
//     return arr;
// }
//
// console.log(random());


//////////////////////////////////////////////////////////////////////
//
// let random = (limit) => {
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//         arr.push(Math.round(Math.random() * 100));
//
//     }
//     return arr;
// }
//
// console.log(random(15));

//////////////////////////////////////////////////////////////////////////////////

// let array = [1,2,3];
//
// let rev = (array) => {
//     let newArr = [];
//     // for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
//     //     newArr[j] = array[i]
//     // }
//     // for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
//     //     newArr.push(array[i]);
//     // }
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(array[array.length - 1 - i]);
//     }
//     return newArr;
// }
// console.log(rev(array));

////////////////////////////////////////////////////////////////////////////////

// let arr = [
//     {age: 22},
//     {age: 33}
// ];

// let change = (array) => {
//     let temp = array[0];
//     array[0] = array[1];
//     array[1] = temp;
//     return array;
// }
//
// console.log(change(arr));

// let change = (array) => [array[0], array[1]] = [array[1], array[0]];
//
// console.log(change(arr));


//////////////////////////////////////////////////////////////////////////////////////

// let rectArea = (a,b) => a * b;
//
// console.log(rectArea(10, 15));
//
//
// //////////////////////////////////////////////////////////////////////////////////////
//
//
// let circleArea = (r) => Math.PI * Math.pow(r,2);
//
//
// console.log(circleArea(10));
//
//
// ///////////////////////////////////////////////////////////////////////////////////
//
//
// let cylArea = (h, r) => 2 * Math.PI * r * h;
//
// console.log(cylArea(10, 10));

///////////////////////////////////////////////////////////////////////////////////

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
// ]
//
//
// let userss = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//
//     }
// }
// userss(users);


//////////////////////////////////////////////////////////////////////////////////////////

// let pCreator = (text) => document.write(`<p>${text}</p>`);
//
// pCreator('ezpz');

////////////////////////////////////////////////////////////////////////////////////////
//
// let ulCreator = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
//
//
// ulCreator('hello');

////////////////////////////////////////////////////////////////////////////////////////////////

// let text = (text, liQuantity) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < liQuantity; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`);
// }
//
// text('text', 5);

///////////////////////////////////////////////////////////////////////////////////////////


// let array = [
//     1, 2, 3, 'string1', 'string2', 'string3', true, false
// ];
// //
// // let ul = (arr) => {
// //     document.write(`<ul>`);
// //     for (let i = 0; i < arr.length; i++) {
// //         document.write(`<li>${array[i]}</li>`);
// //
// //     }
// //     document.write(`</ul>`);
// // }
// //
// // ul(array);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let users = [
//     {id:1, name:'ihor', age:22},
//     {id:2, name:'petro', age:33},
//     {id:3, name:'ivan', age:44}
// ];
//
// let list = (array) => {
//     for (const user of array) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
// };
//
// list(users);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let arr = [ 3, 8, 9, 14, 16 ];
//
// let min = (array) => {
//     let min = array[0];
//     for (const minItem of array) {
//         if (minItem < min){
//             min = minItem;
//         }
//     }
//     return min;
// }
//
// console.log(min(arr));

//////////////////////////////////////////////////////////////////////////////////////////////////


// let arr = [ 3, 8, 9, 14, 16 ];
//
// let sum = (array) => {
//     let sum = 0;
//     for (const arrayItem of array) {
//         sum += arrayItem;
//     }
//     return sum;
// }
//
// console.log(sum(arr));











