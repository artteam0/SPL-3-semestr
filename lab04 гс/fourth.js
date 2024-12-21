//task1//
let productSet = new Set();

function add(product) {
    productSet.add(product);
    console.log(`${product} добавлен в список.`);
}
function del(product) {
    if (productSet.has(product)) {
        productSet.delete(product);
        console.log(`${product} удалён из списка.`);
    } else {
        console.log(`${product} не найден.`);
    }
}
function has(product) {
    if (productSet.has(product)) {
        console.log(`${product} есть в списке.`);
    } else {
        console.log(`${product} нет в списке.`);
    }
}
function count(product) {
    console.log(`Количество товаров: ${productSet.size}`);
}

add("Хлеб");
add("Молоко");
add("Творог");
add("Сметана");
has("Молоко");
has("Мясо");
del("Творог");
del("Рыба");
count();
has("Творог");
//task2//
let studentSet = new Set();

function Add(id, group, fName) {
    const student = { id, group, fName };
    studentSet.add(student);
}
function Remove(id) {
    let student;
    for (student of studentSet) {
        if (student.id == id) {
            studentSet.delete(student);
            break;
        }
    }
}
function Filter(group) {
    let result = [];
    let student;
    for (student of studentSet) {
        if (student.group == group) {
            result.push(student);
        }
    }
    return result;
}
function Id() {
    let temp = Array.from(studentSet);
    temp.sort((a, b) => a.id - b.id);
    return temp;
}

let student1 = { id: 123, group: "8", fName: "Кулешов Артём Алексеевич" };
let student2 = { id: 789, group: "8", fName: "Рауба Арсений Владимирович" };
let student3 = { id: 1213, group: "8", fName: "Дмитроченко Кирилл Денисович" };
let student4 = { id: 1011, group: "8", fName: "Статько Герман Вячеславович" };
let student5 = { id: 456, group: "7", fName: "Старовойтов Илья Сергеевич" };

Add(student1.id, student1.group, student1.fName);
Add(student2.id, student2.group, student2.fName);
Add(student3.id, student3.group, student3.fName);
Add(student4.id, student4.group, student4.fName);
Add(student5.id, student5.group, student5.fName);

Remove(456);

let group = Filter('8');
console.log('Студенты группы 8:', group);

let sorted = Id();
console.log('Студенты, отсортированные по номеру зачетки: ', sorted);
//task3//
function mAdd(map, key, item) {
    map.set(key, item);
}
function mRemove(map, key) {
    map.delete(key);
}
function mDelete(map, item) {
    for ([key, value] of map) {
        if (value.name === item) {
            map.delete(key);
        }
    }
}
function mReplace(map, key, item) {
    let temp = map.get(key);
    temp.amount = item;
    map.delete(key);
    map.set(key, temp);
}

let map = new Map;
let item1 = { name: "Телефон", amount: 180,  price: 2500  };
let item2 = { name: "Ноутбук", amount: 15,   price: 4000  };
let item3 = { name: "Коврик",  amount: 352,  price: 30    };
let item4 = { name: "Мышь",    amount: 52,   price: 150   };
let item5 = { name: "Мышь",    amount: 40,   price: 380   };

mAdd(map, 1, item1);
mAdd(map, 2, item2);
mAdd(map, 3, item3);
mAdd(map, 4, item4);
mAdd(map, 5, item5);

mRemove(map, 1);
mDelete(map, "Мышь");
let x = new Map(map);
mReplace(x, 2, 250);
// mReplace(map, 2, 20);

console.log("Оставшиеся товары в корзине: ")
for (key of map) {
    console.log(key);
}
//task4//
let cache = new WeakMap();

function process(obj) {
    if (!cache.has(obj)) {
        console.log("No cache");
        let result = obj.a + obj.b;
        obj.sum = result;
        cache.set(obj, result);
        return result;
    }
    else {
        console.log("Cache");
        return cache.get(obj);
    }
}

let obj = { a: 4, b: 5 };
let result1 = process(obj);
let result2 = process(obj);