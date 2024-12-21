//1//
let years2 = prompt("Введите число", '');
let user = {
    years: 10,
    greet() { console.log("Привет пользователь") },
    ageAfterYears() { console.log(this.years + +years2) }
};

user.greet();
user.ageAfterYears();
//2//
let car = {
    model: "porsche boxter",
    year: "21 years",
    getInfo() { console.log(this.model, this.year) }
};

car.getInfo();
//3//
function Book(title, author) {
    this.title = title;
    this.author = author;

    this.getTitle = function () {
        return this.title;
    }

    this.getAuthor = function () {
        return this.author;
    }
}

let book = new Book("Алиса в стране чудес", "Льюис Кэррол");
console.log(book.getTitle() + ' ' + book.getAuthor());
//4//
let team = {
    players: [
        { name: "Artsiom", age: "10 years", group: "8 group" },
        { name: "Arsmeniy", age: "3 years", group: "5 group" },
        { name: "Kirill", age: "18 years", group: "1 group" },
        { name: "Ilya", age: "45 years", group: "4 group" },
        { name: "Anton", age: "87 years", group: "9 group" }
    ],
    get Out() {
        for (var player of this.players) {
            console.log(player.name + ' ' + player.age + ' ' + player.group);
        }
    }
}
console.log(team.Out);
//5//
const counter = (function () {
    return {
        b: 1,
        increment() {
            return ++this.b;
        },
        decrement() {
            return --this.b;
        },
        getCount() {
            console.log(this.b);
        }
    }
})();

console.log(counter);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());
//6//
let item = {
    price: "10$"
};

Object.defineProperty(item, "price", {
    configurable: true
});
item.price = "20$";
console.log(item.price);

Object.defineProperty(item, "price", {
    writable: false
});
item.price = "30$";
console.log(item.price);
//7//
let circle = {
    radius: 10,

    get Area() {
        return this.radius * this.radius * Math.PI;
    },

    set Radius(value) {
        this.radius = value;
        console.log("hello");
    }
};

console.log(circle.Area);
console.log(circle.Radius=20);
circle.Radius = 20;
console.log(circle.radius);
console.log(circle.Area);
console.log(circle.Radius);
//8//
let Car = {
    make: "Dodge",
    model: "Charger",
    year: 2015
};

Car.make = "Dodge";
Car.model = "Challenger";
Car.year = 2018;
console.log(Car);

Object.defineProperties(Car, {
    make: {
        value: Car.make,
        writable: false,
        configurable: false
    },
    model: {
        value: Car.model,
        writable: false,
        configurable: false
    },
    year: {
        value: Car.year,
        writable: false,
        configurable: false
    }
});

Car.make = "Toyota";
Car.make = "Mark ||";
Car.year = "uknown";
console.log(Car);
//9//
let Num = [1, 2, 3];

Object.defineProperty(Num, 'Sum', {
    get() {
        let sum = 0;
        for (let i in Num) {
            sum += + i;
        }
        return sum;
    },
    configurable: false
});

console.log(Num.Sum);
//10//
let rectangle = {
    width: 10,
    height: 20,

    get Area() {
        return this.width * this.height;
    },

    get Width() {
        return this.width;
    },
    set Width(value) {
        this.width = value;
    },

    get Height() {
        return this.height;
    },
    set Height(value) {
        this.height = value;
    }
}
console.log(rectangle.Width);
console.log(rectangle.Width=50);
console.log(rectangle.Area);
//11//
let userr = {
    firstName: "Artsiom",
    lastName: "Aliakseevich",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

userr.fullName = "Artsiom Artsiom";
console.log(userr.fullName);
console.log(userr.firstName);
console.log(userr.lastName);