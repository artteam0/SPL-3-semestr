//task1 - 2//
let arr1 = [1, [1, 2, [3, 4]], [2, 4]];
let arr2 = arr1.reduce((acc, item) => {
    function obxod(array) {
        if (Array.isArray(array)) {
            return array.reduce((subAcc, subItem) => subAcc.concat(obxod(subItem)), []); //если массив , то обходим каждый элемент//
        } else {
            return array;
        }
    }
    return acc.concat(obxod(item)); //объединение текущего с аккумулятором//
}, []);
//task3//
function Group(students) {
    const result = {};

    for (let student of students) {
        if (student.age > 17) {
            if (!result[student.groupId]) {
                result[student.groupId] = [];
            }
            result[student.groupId].push(student);
        }
    }
    return result;
}
const students = [
    {name: "whole", age: 16, groupId: 8},
    {name: "THUG", age: 13, groupId: 1},
    {name: "hugo", age: 16, groupId: 4},
    {name: "pluto", age: 18, groupId: 1},
    {name: "2hug", age: 20, groupId: 7},
    {name: "ICEGERGERT", age: 21, groupId: 8},
    {name: "ALBLAK", age: 25, groupId: 4},
];

const result = Group(students);
console.log(result);
//task4//
let str = "ABC";
let sum = '';
for (let i = 0; i < str.length; i++) {
    sum += String(str.codePointAt(i));
}
let str2 = sum.replace(/7/g,'1');
console.log("total1: " + sum + '\n' + "total2:" + str2 + '\n' + "result: " + (sum - str2));
//task5//
function extend(... objects) {
    return Object.assign({}, ... objects);
}

console.log(extend({a: 1, b: 2}, {c: 3}));
console.log(extend({a: 1, b: 2}, {c: 3}, {b: 4}));
console.log(extend({a: 1, b: 2}, {a: 3, c: 3}));
//task6//
function Tower(floors) {
    let tower = [];

    for (let i = 0; i < floors; i++) {
        let stars = '*'.repeat(2 * i + 1);
        let spaces = ' '.repeat(floors - i - 1);
        tower.push(spaces + stars + spaces);
    }

    return tower;
}

console.log(Tower(7));