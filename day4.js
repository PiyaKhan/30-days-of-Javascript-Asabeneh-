const yourAge = Number(prompt('Enter your age'));
const drive = (yourAge >= 18) ? (`you are old enough to drive`) : (`you are left with ${18 - yourAge} years to drive.`);
console.log(drive);

// 2.
const myAge = 24;
const YourAge = Number(prompt('Enter your age'));
if (YourAge > myAge) {
    console.log(`you are ${YourAge - myAge} years older than me.`);
} else {
    console.log(`you are ${myAge - YourAge} years younger than me`);
}

// 3.

let a = 4;
let b = 3;
// if (a > b)
//     console.log('4 is greater than 3');
// else
//     console.log('4 less than 3');
const greater = (a > b) ? ('4 is greater than b') : ('4 is less than 3');
console.log(greater);

// 4.

const number = Number(prompt('Enter a number'));
const oddEven = (number % 2 === 0) ? (`${number} is even number`) : (`${number} is odd number`);
console.log(oddEven);
// 5.

// level 2//
// 1.

const score = prompt('Enter score');
switch (true) {
    case score >= 80 && score <= 100:
        console.log('Grade A');
        break;
    case score >= 70 && score <= 79:
        console.log('Grade B');
        break;
    case score >= 60 && score <= 69:
        console.log('Grade C');
        break;
    case score >= 50 && score <= 59:
        console.log('Grade D');
        break;
    default:
        console.log('Fail');
        break;
}


if (score >= 80 && score <= 100) {
    console.log('A');
} else if (score >= 70 && score <= 79) {
    console.log('B');
} else if (score >= 60 && score <= 69) {
    console.log('C');
} else if (score >= 50 && score <= 59) {
    console.log('D');
} else {
    console.log('Fail');
}

// 2.

const season = prompt('Enter the season');
if (season === 'september' || 'october' || 'november') {
    console.log('The season is Autumn');
} else if (season = december || january | february) {
    console.log('The season is Winter')
} else if (season = march || april || may) {
    console.log('The season is Spring');
} else if (season = june || july || august) {
    console.log('The season is Summer');
} else
    console.log('Enter valid season');

// 3.
const day = prompt('what is day today?');
const days = day.toLowerCase();
switch (days) {
    case 'monday':
        console.log('Monday is a working day');
        break;
    case 'tuesday':
        console.log('tuesday is a working day');
        break;
    case 'wednesday':
        console.log('wednesday is a working day');
        break;
    case 'thursday':
        console.log('thursday is a working day');
        break;
    case 'friday':
        console.log('friday is working day');
        break;
    case 'saturday':
    case 'sunday':
        console.log('This is a weekend');

        break;
    default:
        console.log('enter a valid week');
}


// level 3

const mo = prompt("enter month to check number of days");
const firstLetter = mo.split('')[0].toUpperCase(); // J
const restOfLetters = mo.split('').slice(1).join('').toLowerCase(); // anUARy . ['a', 'n', 'U'] anU => anu January

const month = firstLetter + restOfLetters
switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${month} has 31 days in it.`);
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(`${month} has 30 days in it.`);
        break;
    case 'February':
        console.log(`${month} has 29 days.`);
        break;
    default:
        console.log(`Enter a valid month! ⚠️`);
};