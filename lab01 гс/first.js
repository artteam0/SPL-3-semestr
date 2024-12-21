//task1//
let k = 5; //num//
let name = "Name"; //string//
let j = 0; //num//
let double = 0.23; //num//
let result = 1/0; //num(inf)//
let answer = true; //bool/
let no = null; //null//
//task2//
let sideSQ = 5;
let height = 45;
let width = 21;
console.log("Num of squares =", ((width)*(height))/(sideSQ^2));
//task3//
let i = 2;
let a = ++i;
let b = i++;
console.log(a);
console.log(b);
console.log(a > b);
//task 4//
console.log("Котик" < "котик" ? "Котик" : "котик");
console.log("Котик" < "китик" ? "Котик" : "китик");
console.log("Кот" < "котик" ? "Кот" : "котик");
console.log("Привет" > "Пока" ? "Привет" : "Пока");
console.log(73 > 53);
console.log(false > 0);
console.log(54 > true);
console.log(123 > false);
console.log(true > 3);
console.log(3 > '5мм');
console.log(8 > -2);
console.log(34 == '34');
console.log(null > undefined);
//task5//
let d = prompt("Введите имя", '');
if (d == "Марина"|| d == "Марина Фёдоровна" || d == "Кудлацкая Марина Фёдоровна" || d == "Марина Федоровна" || d == "Кудлацкая Марина Федоровна" || d == "МАРИНА" || d == "МАРИНА ФЁДОРОВНА" || d == "КУДЛАЦКАЯ МАРИНА ФЁДОРОВНА" || d == "МАРИНА ФЕДОРОВНА" || d == "КУДЛАЦКАЯ МАРИНА ФЕДОРОВНА") {
    console.log("Данные введены верно !");
} else {
    console.log("Данные введены неверно !");
}
//task6//
let rus = confirm("Русский сдан ?");
let mat = confirm("Математика сдана ?");
let eng = confirm("Английский сдан ?");
if (rus&&mat&&eng == true) {
    console.log("Переведён на следующий курс !");
}else if (rus&&mat&&eng == false && rus||mat||eng == true) {
    console.log("Пересдача !");
} else if (rus&&mat&&eng == false) {
    console.log("Отчислен !");
} 
//task 7//
console.log(true + true); 
console.log(0 + "5");
console.log(5 + "мм");
console.log(8/Infinity); 
console.log(9 * "\n9"); 
console.log(null - 1); 
console.log("5" - 2);
console.log("5px" - 3); 
console.log(true - 3);
console.log(7 || 0); 
//task8//
for (let i = 1; i <=10; i++) {
    if (i % 2 == 0) {
        console.log(i + 2);
    } else if (i % 2 != 0) {
        console.log(i + 'мм');
    }
}
//task9//mas//
let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let s = prompt("Введите номер дня недели (array)", '');
console.log(days[s - 1]);
//object//
let Days = [{Name: "Monday", Count: 1}, {Name: "Tuesday", Count: 2}, {Name: "Wednesday", Count: 3}, {Name: "Thursday", Count: 4}, {Name: "Friday", Count: 5}, {Name: "Saturday", Count: 6}, {Name: "Sunday", Count: 7}];
let h = prompt("Введите номер дня недели (object)", '');
for (let i = 0; i < 7; i++) {
    if (h == Days[i].Count) {
        console.log(Days[i].Name);
    }
}
//task10//
let c = prompt("Введите третий параметр", '')
let z = "second ";
function hello(a = "first ", z, c) {
    console.log(a + z + c);
}
hello(undefined, z, c);
//task11//declatation//
let v = prompt("Введите сторону четырёхугольника", '');
let n = prompt("Введите вторую сторону четырёхугольника", '');
function params(n, v) {
    if (n == v) {
        console.log("Периметр квадрата равен: ", n * 4);
    } else {
      console.log("Площадь прямоугольника равна: ", n * v);  
    }
}
params(n, v);
//expression//
let p = function(n, v) {
    if (n == v) {
        console.log("Периметр квадрата равен: ", n * 4);
    } else {
      console.log("Площадь прямоугольника равна: ", n * v);  
    }
}
console.log(p(n, v));
//arrow//
let func = (n, v) => (n == v) ? (n * 4) : (n * v);
console.log(func(n ,v));