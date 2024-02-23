//level 1//
const firstName = 'Piya';
const lastName = 'Chatterjee';
const country = 'India';
const city = 'Dubrajpur';
const age = 24;
const isMarried = 'No';
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);

console.log(typeof '10' == 10);

console.log(parseInt('9.8') == 10);


console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
const language1 = 'python';
const x = language1.length;
const language2 = 'jargon';
const y = language2.length;
console.log(x !== y);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
const a1 = 'python';
const b1 = 'dragon';
console.log((a1.includes('on')) !== (b1.includes('on')));


const date = new Date();
const year = date.getFullYear();
console.log(year);

const month = date.getMonth();
console.log(month);

const date1 = date.getDate();
console.log(date1);

const day = date.getDay();
console.log(day);

const hours = date.getHours();
console.log(hours);

const minute = date.getMinutes();
console.log(minute);

console.log(date.getTime());

//level 2//

// alert();
// const base=Number(prompt('Enter a base of triangle'));
// const height=Number(prompt('Enter a height of triangle'));
// const area=0.5*base*height;
// console.log(area);

// const a = Number(prompt('Enter side a'));
// const b = Number(prompt('Enter side b'));
// const c = Number(prompt('Enter side c'));
// const perimeter=a+b+c;
// console.log(perimeter);

const length = 6;
const width = 7;
const area = length * width;
perimeter = 2 * (length + width);
console.log(area, perimeter);

// const r = Number(prompt('Enter the radius of a circle'));
// const pi = 3.14;
// const areaa = pi * r * r;
// const circumference = 2 * pi * r;
// console.log(areaa);
// console.log(circumference);

// const hour = Number(prompt('Enter hour'));
// const RateperHour = Number(prompt('Enter rate per hour'));
// const earning = hour * RateperHour;
// console.log(`Enter hour:${hour}\nEnter RateperHour:${RateperHour}\nWeekly earning is ${earning}`);

// const nam = 'PiyaKhan';
// if (nam.length >= 7)
//     console.log('Your name is long');
// else
//     console.log('Your name is short');

// let FirstName = prompt('Enter first name');
// let LastName = prompt('Enter lastname');
// const length1 = FirstName.length;
// const length2 = LastName.length;
// if (length1 >= length2)
//     console.log(`${FirstName},is longer than your family name,${LastName}`);
// else
//     console.log(`Family name is longer`);

12
const myAge = 24;
const yourAge = 20;
(myAge >= yourAge) ? console.log(`I am ${myAge - yourAge} years older than you`) : console.log('I am younger');

// 13.

const birthYear = Number(prompt('Enter your birth year'));
const currentYear = 2023;
const difference = currentYear - birthYear;
if (difference === 18) {
    console.log(`you are ${difference} ready to drive.`);
} else if (difference < 18) {
    console.log(`you are ${difference} .you will be ready to drive after ${18 - difference} years`);
} else
    console.log(`You are ${difference} old enough to drive.`);

// 14.
const yearstoLive = Number(prompt('Enter years.'));
console.log(`Enter number of years you live : ${yearstoLive}\n you lived ${Math.floor(yearstoLive * 365 * 24 * 3600)}`);

// 15.
const date2 = new Date();
const year1 = date2.getFullYear();
const month1 = date2.getMonth() + 1;
const day1 = date2.getDate();
const hours1 = date2.getHours();
const minutes = date2.getMinutes();
console.log(`${year1}-${month1}-${day1} ${hours1}:${minutes}`);
console.log(`${day1}-${month1}-${year1} ${hours1}:${minutes}`);
console.log(`${day1}/${month1}/${year1} ${hours1}:${minutes}`);

// 16.
