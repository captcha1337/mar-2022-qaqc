
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


function Car (model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`We're driving with speed of ${maxSpeed} per hour`);

    }
    this.info = function () {
        for (const infoPoint in this) {
            console.log(`${infoPoint} - ${this[infoPoint]}`);
            // console.log(infoPoint);
        }
    }
}

car1 = new Car ('passat','volkswagen',2010,'240km',2);

car1.info();