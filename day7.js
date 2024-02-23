/*

// 1.
function fullName(name) {
    return `My name is ${name}`
}
console.log(fullName('Piya'));
const myName = fullName('Piya khan');
console.log(myName);

// 2.
function fullName2(firstName, lastName) {
    return `My full name is ${firstName} ${lastName}`
}
console.log(fullName2('Piya', 'khan'));

// 3.
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(5, 3));

// 4.
function areaOfRectangle(length, width) {
    return `Area of Reactangle is ${length * width}`;
}
console.log(areaOfRectangle(13, 15));


// 5.
function perimeterOfRectangle(length, width) {
    return `Perimeter of Rectangle is ${2 * (length + width)}`
}
console.log(perimeterOfRectangle(13, 15));

// 6.
function volumeOfRectPrism(length, height, width) {
    return `volume of rectangular prism is ${length * height * width} cubic meter`
}
console.log(volumeOfRectPrism(12, 13, 14));

// 7.
// const pi = 3.14;
function areaOfCircle(r, pi) {
    return `Area of circle is ${pi * r * r}`
}
console.log(areaOfCircle(4, 3.14));

// 8.
function circumOfCircle(r, pi) {
    return `Circumference of circle is ${2 * pi * r}`
}
console.log(circumOfCircle(4, 3.14));

// 9.
function density(mass, volume) {
    return `Density of substance is ${mass / volume}`;
}
console.log(density(20, 10));

// 10.
function speed(time, distance) {
    return `Speed is ${distance / time}`
}
console.log(speed(2, 6));

// 11.
function weight(mass, gravity) {
    return `Weight of substance is ${mass * gravity}`
}
console.log(weight(4, 5));

// 12.
function convertCelsiusToFahrenheit(oC, oF) {
    return `After converting celsius to Farenheit is ${oF = (oC * (9 / 5)) + 32}`;
}
console.log(convertCelsiusToFahrenheit(100, 50));

// 13.
const calculateBMI = function (height, weight) {
    const BMI = weight / (height * height)
    if (BMI < 18.5) return 'underweight';
    if (BMI >= 18.5 && BMI >= 24.9) return 'normal weight';
    if (BMI >= 25 && BMI >= 29.9) return 'over weight';
    if (BMI >= 30) return 'obese';
}
console.log(calculateBMI(1.4, 53));

// 14.

// const checkSeason = month => {
//     if (month === september || month === october || month === november) {
//         return 'Autumn';
//     } else if (month === december || month === january || month === february) {
//         return 'Winter';
//     } else if (month === march || month === april || month === may) {
//         return 'Spring';
//     } else if (month === june || month === july || month === august) {
//         return 'Summer';
//     }

// }
// console.log(checkSeason(january));

// 15.

function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(findMax(4, 5, 7));

/////level 2/////

// 1.
// 3.
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArray([2, 3, 4])

// 4.
function showDateTime() {
    const date2 = new Date();
    const year1 = date2.getFullYear();
    const month1 = date2.getMonth() + 1;
    const date = date2.getDate();
    const hours1 = date2.getHours();
    const minutes = date2.getMinutes();
    return `${year1}/${month1}/${date} ${hours1}:${minutes}`;
}
console.log(showDateTime());

// 5.
function swapValues(a, b) {
    // return `${y},${x}`;
    let x = b;
    let y = a;
    return `${x},${y}`;
}
console.log(swapValues(3, 4));

// 6.
function reverseArray(arr) {
    let reversedArr = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArr.unshift(arr[i]);
    }
    return reversedArr;
}
console.log(reverseArray([5, 4, 3]));

// 7.

function capitalizeArray(arr) {
    let capitalizedArr = [];
    for (let i = 0; i < arr.length; i++) {
        capitalizedArr.push(arr[i].toUpperCase());
    }
    console.log(capitalizedArr);
}
capitalizeArray(['Piya', 'Khan']);

// 8.
function addIten(num) {
    let itemArr = [];
    itemArr.push(num);
    return itemArr;
}
console.log(addIten(5));

// 9.
function removeItem(arr, index) {
    arr.splice(index, 1);
    return arr;
}
console.log(removeItem([2, 3, 4, 5, 6, 7], 4));

// function item(arr, index) {
//     const itmNumber = arr.slice(index);
//     return itmNumber;
// }
// console.log(item([2, 3, 4, 5, 6, 7], 1));

// 10.

function sumOfNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sumOfNumbers(4, 6, 7, 8, 9));

// 11.odd ta korbo
// 12.
function sumOfEven() {
    let even = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 === 0) even += arguments[i];
    }
    return even;
}
console.log(sumOfEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 13.
function evenAndOdds(num) {
    let even = 0, odd = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) even++;
        if (i % 2 !== 0) odd++;
    }
    return `The number of evens are ${even}\n The number of odd are ${odd}`;
}
console.log(evenAndOdds(1000));

// 14.
function sumOfArguments() {

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};

console.log(sumOfArguments(1, 2, 3, 4));

// 15.
randomUserIp = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    let four = Math.floor(Math.random() * 255);
    return `IP: ${one}:${two}:${three}:${four}`
}
console.log(randomUserIp());

// 17.
function randomHexaNumberGenerator() {
    const chars = 'abcdef0123456789';
    let hexNumber = '#';
    for (let i = 0; i < 6; i++) {
        let charIndex = Math.floor(Math.random() * chars.length);
        // hexNumber += chars.charAt(charIndex);
        hexNumber += chars[charIndex];
    }
    return hexNumber;
}
console.log(randomHexaNumberGenerator());

// 18.

function userIdGenerator() {
    let char = 'abcdefABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let hexNumber = '';
    for (let i = 0; i < 6; i++) {
        let charIndex = Math.floor(Math.random() * char.length);
        hexNumber += char[charIndex];
    }
    return hexNumber;
}
console.log(userIdGenerator());

////level 3///////
// 1. take 2 prompt with number,duto loop hbe ,aktai number of id thkbe,arektai number of number
// 

function userIdGenerated() {
    const numOfId = Number(prompt('Number if ids'));
    const numOfChars = Number(prompt('Number if chars'));
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let ids = [];

    for (let i = 0; i < numOfId; i++) {
        let userId = '';

        for (let j = 0; j < numOfChars; j++) {
            let charIndex = Math.floor(Math.random() * chars.length);
            userId += chars[charIndex];
        }
        ids.push(userId);
    }
    for (let k = 0; k < ids.length; k++) {
        console.log(ids[k]);
    }
}
userIdGenerated();

// 7.
function randomColor(typeOfColor, numberOfColor) {
    let chars = 'abcdefABCDEF0123456789';
    let colorArr = [];
    if (typeOfColor === 'hexa') {
        for (let i = 0; i < numberOfColor; i++) {
            colorArr[i] = '#';
            for (let j = 0; j < 6; j++) {
                colorArr[i] += chars[Math.floor(Math.random() * chars.length)]
            }
        }
    }
    if (typeOfColor === 'rgb') {
        for (let k = 0; k < numberOfColor; k++) {
            colorArr[k] = 'rgb';
            colorArr[k] += `(${Math.floor(Math.random() * 255)},`
            colorArr[k] += `${Math.floor(Math.random() * 255)},`
            colorArr[k] += `${Math.floor(Math.random() * 255)})`
        }
    }
    return colorArr;
}
console.log(randomColor('rgb', 4));
console.log(randomColor('hexa', 5));

// example
const hexaColor = () => {
    let chars = 'abcdefABCDEF0123456789'
    let hex = '';
    for (let i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
    }
    return `#${hex}`;
}
console.log(hexaColor());

// 9.
function factorial(num) {
    let fact = 1;
    for (let i = num; i > 0; i--) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(10));
// 10.
function isEmpty(value) {
    if (value === undefined) return 'Value is empty'
    return 'value is not empty'
}
console.log(isEmpty());
console.log(isEmpty(5));

// 11.
// function sum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     // console.log(arguments);
//     return sum;
// }
// console.log(sum(1, 2, 3, 4)); 

function sum() {
    let sum = 0;
    for (let num of arguments) {
        sum += num;
    }
    return sum;
}
console.log(sum(1, 2, 3, 4));

*/
const arr = [12, 14, 25, 80];
for (let number of arr) {
    console.log(number);
}

// 12.
function sumOfArrayItems(arr) {
    let sum = 0;
    for (let item of arr) {
        if (typeof item !== 'number') {
            sum = 'array doesnot consist number,please provide number only';
            break;
        }
        sum += item;
    }
    return sum;
}
console.log(sumOfArrayItems([2, 5, 7, 9, 6]));

// 13.
function average(arr) {
    let result = 0;
    for (let item of arr) {
        if (typeof item !== 'number') {
            sum = 'array doesnot consist number,please provide number only';
            break;
        }
        result += item;
    }
    return result / arr.length;
}
console.log(average([2, 3, 4, 5]));

// 14.

function modifyArray(arr) {
    let result = [];
    if (arr.length < 5) return 'Item not found';
    for (let item of arr) {
        if (arr.indexOf(item) === 4) {
            result.push(item.toUpperCase());
        } else result.push(item);
    }
    return result;
}
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']));

// 15.
function isPrime(num) {
    let result;
    for (let i = 2; i <= num; i += 2) {
        if (Number.isInteger(num / i)) result = false;
        else result = true;
    }
    return result;
}
console.log(isPrime(15));

// 16.
function isUnique(arr) {
    let newArr = [...new Set(arr)]
    if (newArr.length === arr.length) return 'True';
    return 'False'
}
console.log(isUnique([1, 2, 3]));
console.log(new Set([1, 2, 2, 3, 4, 5, 5]));

// 17.
function isSameDataType(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[0] !== typeof arr[i]) return false;
    }
    return true;
}
console.log(isSameDataType(['a', 'b', 'c', 'd']));

// 19.
function isUniqueArr() {
    let arr = [];
    for (let i = 0; i < 7; i++) {
        let number = Math.floor(Math.random() * 10);
        if (!arr.includes(number)) 

    }
}