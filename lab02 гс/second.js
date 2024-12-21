//task1//
function basicOperation(operation, value1, value2) {
    let result;

    switch (operation) {
        case '+': result = value1 + value2;
        break;

        case '-': result = value1 - value2;
        break;

        case '*': result = value1 * value2;
        break;

        case '/': result = value1 / value2;
        break;

        default: console.error("Иной оператор.");
    }
    return result;
}

let result = basicOperation('/', 5, 10);
console.log(result);
//task2//
function Cube(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i ** 3;
    }

    return sum;
}

let sum = Cube(5); //1^3 + 2^3 + 3^3 + 4^3 + 5^3 = 1 + 8 + 27 + 64 + 125 = 225//
console.log(sum);
//task3//
function Array(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let avg = Array(num); 
console.log(avg);
//task4//
function rev(str) {
    let resultt = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90 ||  str[i].charCodeAt() <= 122) {
            result += str[i];
        }
    }
    return resultt;
}
console.log(rev("JavaScript"));
//task5//
function String(n, s) {
    return s.repeat(n);
}   
console.log(String(3, "JavaScript"));
//task6//
function Diff(array1, array2) {
    console.log('two'.includes('two'));
    return array1.filter (item => !array2.includes(item));
    
}

let array1 = ['one', 'two', 'three', 'four'];
let array2 = ['five', 'six', 'one'];
let resultt = Diff(array1, array2);
console.log(resultt);

