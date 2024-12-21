//task1//
//Variant1//
function makeCounter() {
    let currentCount = 1;

    return function () { // (*)
        return currentCount++;
    };
}

let counter = makeCounter();

alert(counter());
alert(counter());
alert(counter());

let counter2 = makeCounter();
alert(counter2());
//Variant2//
let currentCount2 = 1;

function makeCounter2() {
    return function () {
        return currentCount2++;
    };
}

let counter_strike = makeCounter2();
let counter_strike2 = makeCounter2();

alert(counter_strike());
alert(counter_strike());

alert(counter_strike2());
alert(counter_strike2());
//task2//
function parallelepiped(lenght) {
    return function (width) {
        return function (height) {
            return lenght * width * height;
        };
    };
}

const Lenght = parallelepiped(7);
console.log(Lenght(1)(2));
//task3//
function* moves() {
    let x = 0;
    let y = 0;
    let q = true;

    while (q) {
        let command = prompt("Введите комманду: left(l), right(r), up(u), down(d)");

        switch (command) {
            case 'l':
                for (let i = 0; i < 10; i++) {
                    x -= 1;
                    yield { x, y };
                }
                break;
            case 'r':
                for (let i = 0; i < 10; i++) {
                    x += 1;
                    yield { x, y };
                }
                break;
            case 'u':
                for (let i = 0; i < 10; i++) {
                    y += 1;
                    yield { x, y };
                }
                break;
            case 'd':
                for (let i = 0; i < 10; i++) {
                    y -= 1;
                    yield { x, y };
                }
                break;
            case 'q':
                q = false;
                return;
            default:
                alert("Неверная команда.");
        }
    }
}

const generator = moves();

function run() {
    const result = generator.next();

    if (!result.done) {
        let { x, y } = result.value;
        console.log(`Координаты: (${x}, ${y})`);
        run();
    } else {
        console.log("Работа завершена.");
    }
}

run();
//task4//
var gg = 5;
window.gg = 2;
console.log(gg)
console.log(window.gg);