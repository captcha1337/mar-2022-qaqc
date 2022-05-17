
//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//створити пустий масив, наповнити його 10 об'єктами new User(....)
// let array = [];
// let user1 = new User(5, 'Travis', 'Scott', 'qq@gmail.com', 1234556778);
// let user2 = new User(6, 'Travis', 'Scott', 'qq@gmail.com', 1234556778);
// let user3 = new User(1, 'Travis', 'Scott', 'qq@gmail.com', 1234556778);
// let user4 = new User(2, 'Travis', 'Scott', 'qq@gmail.com', 1234556778);
// let user5 = new User(4, 'Travis', 'Scott', 'qq@gmail.com', 1234556778);
// let user6 = new User(3, 'Travis', 'Scott', 'qq@gmail.com', 1234556778);
// let user7 = new User(7, 'Travis', 'Scott', 'qq@gmail.com', 1234556778);
// let user8 = new User(8, 'Travis', 'Scott', 'qq@gmail.com', 1234556778);
// let user9 = new User(10, 'Travis', 'Scott', 'qq@gmail.com', 1234556778);
// let user10 = new User(9, 'Travis', 'Scott', 'qq@gmail.com', 1234556778);
//
// array = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// console.log(array.filter((user) => user.id % 2 === 0));
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(array.sort((user1, user2) => user1.id - user2.id));
//
// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
//створити пустий масив, наповнити його 10 об'єктами Client

// let array1 = [];
// let client2 = new Client(2,'Kendrick', 'Lamar','kendricklamar@gmail.com',123456789,['milk', 'bread']);
// let client4 = new Client(4,'Kendrick', 'Lamar','kendricklamar@gmail.com',123456789,['milk', 'bread','water']);
// let client6 = new Client(6,'Kendrick', 'Lamar','kendricklamar@gmail.com',123456789,['milk', 'bread','water','apples']);
// let client5 = new Client(5,'Kendrick', 'Lamar','kendricklamar@gmail.com',123456789,['milk', 'bread','water','apples','bananas']);
// let client1 = new Client(1,'Kendrick', 'Lamar','kendricklamar@gmail.com',123456789,['milk', 'bread','water','apples','bananas','tomatoes']);
// let client10 = new Client(10,'Kendrick', 'Lamar','kendricklamar@gmail.com',123456789,['milk', 'bread','water']);
// let client3 = new Client(3,'Kendrick', 'Lamar','kendricklamar@gmail.com',123456789,['milk', 'bread']);
// let client9 = new Client(9,'Kendrick', 'Lamar','kendricklamar@gmail.com',123456789,['milk', 'bread','water','apples','bananas','tomatoes']);
// let client8 = new Client(8,'Kendrick', 'Lamar','kendricklamar@gmail.com',123456789,['milk', 'bread','water','apples']);
// let client7 = new Client(7,'Kendrick', 'Lamar','kendricklamar@gmail.com',123456789,['milk', 'bread','water']);
// array1 = [client1, client2, client3, client4,client5,client6,client7,client8,client9,client10];
//
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


// console.log(array1.sort((client1, client2) => client1.order.length - client2.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, producer, year, maxSpeedKmh, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeedKmh = maxSpeedKmh;
//     this.engine = engine;
//
//     this.drive = function () {
//         console.log(`We're driving with speed of ${maxSpeedKmh} per hour`);
//
//     }
//     this.info = function () {
//         for (const infoPoint in this) {
//             console.log(`${infoPoint} - ${this[infoPoint]}`);
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(maxSpeedKmh += newSpeed);
//     }
//     this.changeYear = function (newValue) {
//         console.log(this.year = newValue);
//     }
//     this.addDriver = function (driver) {
//         console.log(this.driver = driver);
//
//     }
// }
//
// car1 = new Car ('passat','volkswagen',2010,240,'2.0');
//
// let driver = {
//     name: 'Stig',
//     age: 24,
//     skill: '10 years'
// };
//
// car1.drive();
//
// car1.info();
//
// car1.increaseMaxSpeed(20);
//
// car1.changeYear(2022);
//
// car1.addDriver(driver);




// class Car {
//     constructor(model, producer, year, maxSpeedKmh, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeedKmh = maxSpeedKmh;
//         this.engine = engine;
//
//         this.drive = function () {
//         console.log(`We're driving with speed of ${maxSpeedKmh} per hour`);
//
//         }
//         this.info = function () {
//             for (const infoPoint in this) {
//                 console.log(`${infoPoint} - ${this[infoPoint]}`);
//             }
//         }
//
//         this.increaseMaxSpeed = function (newSpeed) {
//             console.log(maxSpeedKmh += newSpeed);
//         }
//         this.changeYear = function (newValue) {
//             console.log(this.year = newValue);
//         }
//         this.addDriver = function (driver) {
//             console.log(this.driver = driver);
//
//         }
//
//     }
//
// }
//
//
// car1 = new Car ('passat','volkswagen',2010,240,'2.0');
//
// let driver = {
//     name: 'Stig',
//     age: 24,
//     skill: '10 years'
// };
//
//
//
// car1.info();
//
// car1.drive();
//
// car1.increaseMaxSpeed(20);
//
// car1.changeYear(2022);
//
// car1.addDriver(driver);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Cinderella (name, age, footsize) {
//     this.name = name;
//     this.age = age;
//     this.footsize = footsize;
// }
//
//
// let arr = [
//     cinderella1 = new Cinderella ('Alisa',27,39.8),
//     cinderella2 = new Cinderella ('Ashly',22,37.5),
//     cinderella3 = new Cinderella ('Katherine',23,37.8),
//     cinderella4 = new Cinderella ('Ellen',21,35.1),
//     cinderella5 = new Cinderella ('Christina',35,36.7),
//     cinderella6 = new Cinderella ('Lilly',24,39.4),
//     cinderella7 = new Cinderella ('Jolie',20,36.6),
//     cinderella8 = new Cinderella ('Vanessa',30,37.4),
//     cinderella9 = new Cinderella ('Amanda',27,35.6),
//     cinderella10 = new Cinderella ('Angie',25,39.7)
// ]
//
//
// function Prince (name, age, footsize) {
//     this.name = name;
//     this.age = age;
//     this.footsize = footsize;
// }
//
// prince = new Prince('Justin',30,36.7);
//
//
// function match (array, object) {
//     for (const cinderella of array) {
//         if (cinderella.footsize === object.footsize) {
//             return cinderella.name;
//         }
//
//     }
// }
//
// console.log(match(arr, prince));
//
// console.log(arr.find(value => value.name === 'Christina'));