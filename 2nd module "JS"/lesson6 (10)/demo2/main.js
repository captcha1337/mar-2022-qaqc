// let nums = [11, 22, 33, 44];
// console.log(Array.isArray(nums));
//
// console.log(nums.push('new val'));
// console.log(nums)
// console.log(nums.pop());
// console.log(nums);
// console.log(nums.unshift('hello'))
// console.log(nums)
// console.log(nums.shift());
// console.log(nums)
//
// console.log(nums.join('-'));
// console.log(nums.concat([1, 2, 3]));
// // console.log(nums.reverse());
// let numbers = nums.concat(1, 2, 3, 4, 5);
//
// console.log(numbers);
// // console.log(numbers.splice(1));
// // console.log(numbers.splice(1,2));
// console.log(numbers.splice(1, 2, 'asd', 'qwe', 'qwe'));
// console.log(numbers);
//
// console.log(numbers.includes('asd'));


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

// users.forEach(function (value, index) {
//     console.log(value.name, index);
// })
// users.forEach(value,index => console.log(value));

// let filter = users.filter(function (user) {
//     return user.status;
// });
// console.log(filter);

// let filter = users.filter(value => !value.status && value.age === 31);
// console.log(filter);

// console.log(users.find(value => value.age === 30));

// let mapArray = users.map(function (user, index) {
//     let u = {...user};
//     u.id = index + 1;
//     return u;
// });
//
// console.log(mapArray);
// console.log(users);

// console.log(users.sort((u1, u2) => u2.age - u1.age));

// console.log('b' > 'a');

// console.log(users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1
//     }
//     if (b.name > a.name) {
//         return -1
//     }
//     return 0;
// }));

//
// let reduce = users.reduce((accumulator, user) => {
//     if (user.status) {
//         accumulator.statusTrue.push(user);
//     } else {
//         accumulator.statusFalse.push(user);
//     }
//     return accumulator;
// }, {statusTrue: [], statusFalse: []});
//
// console.log(reduce);

// let reduce = users.reduce((accumulator, user) => {
//     if (user.status) {
//         accumulator[0].push(user);
//     } else {
//         accumulator[1].push(user);
//     }
//     return accumulator;
// }, [[], []]);
//
// console.log(reduce);


// console.log(users.some(value => value.age > 30));
// console.log(users.every(value => value.age > 28));
