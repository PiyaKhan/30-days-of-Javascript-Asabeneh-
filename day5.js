
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
const emptyArray = [];
const fiveElements = [1, 2, 3, 4, 5];
console.log(fiveElements.length);

// const firstElement = fiveElements[0];
// const lastElement = fiveElements[4]
console.log(fiveElements[0]);
console.log(fiveElements[Math.floor(fiveElements.length / 2)]);
console.log(fiveElements.length - 1);



const mixedDataTypes = ['Array', true, false, undefined, null, [1, 2, 3], { name: 'Piya' }];
console.log(mixedDataTypes.length);

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies);

console.log(itCompanies.length);

console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// for (let i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i]);
// }

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

console.log(`${itCompanies} are big IT comoanies.`);

// 13.
const company = prompt('Enter a company name');
// if (company === 'Facebook' || 'Google' || 'Microsoft' || 'Apple' || 'IBM' || 'Oracle' || 'Amazon') {
//     console.log(`${itCompanies}`);
// } else {
//     console.log('company is not found');
// }

if (itCompanies.includes(company)) {
    console.log(`${company}`);
} else {
    console.log('company is not found');
}

// 14.
let fliterArray = [];
for (let i = 0; i < itCompanies.length; i++) {
    fliterArray.push(itCompanies[i].includes('oo'));
}
console.log(fliterArray);

// 15.

// const sortedCompanies = itCompanies.sort();
// console.log(sortedCompanies);
console.log(itCompanies.sort());
// 16.
itCompanies.reverse();
console.log(itCompanies);

// 17.
const sliceCompanies = itCompanies.slice(0, 3);
console.log(sliceCompanies);
const sliceCompanies1 = itCompanies.slice(4, 7);
console.log(sliceCompanies1);

// 19
const sliceOut = itCompanies[Math.floor(itCompanies.length / 2)];
console.log(sliceOut);
// 20.
itCompanies.shift();
console.log(itCompanies);
// 21.
const deletedCompany = itCompanies.splice(3, 1);
console.log(deletedCompany);
console.log(itCompanies);
// 22.
itCompanies.pop();
console.log(itCompanies);
// 23.
console.log(itCompanies.splice(0, itCompanies.length));
console.log(itCompanies);


///// level 2/////

// 2.
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const newText = text.replace(/[,.]/g, '');
console.log(newText);
console.log(text.length);

const splitText = newText.split(' ');
console.log(splitText);
console.log(splitText.length);

// 3.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
console.log(shoppingCart);
shoppingCart.push('Sugar');
console.log(shoppingCart);

// shoppingCart.pop('Honey');
// console.log(shoppingCart);
// const removeHoney = shoppingCart.splice(4);
// console.log(removeHoney);
// console.log(shoppingCart);

const editedShoppingcart = shoppingCart.splice(3, 1, 'Green Tea');
console.log(editedShoppingcart);
console.log(shoppingCart);

// 4.

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
const check = countries.includes('Ethiopia') === true ? console.log('ETHIOPIA') : countries.push('Ethiopia');
console.log(check);

// 5.
const techCheck = webTechs.includes('Saas') === true ? console.log('SAAS is a CSS preprocess') : webTechs.push('Saas');
console.log(techCheck);

// 6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack)

///// level 3/////

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedAges = ages.sort();
console.log(sortedAges);

console.log(Math.max(...ages));
console.log(Math.min(...ages));
let max = 0;
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > max) {
        max = ages[i];
    }
}
let min = ages[0]; // 0 
for (let i = 0; i < ages.length; i++) {
    if (min > ages[i]) { // 19 > 22
        min = ages[i]; // min = 19
    }
}
console.log(min)

// console.log(countries);
// console.log(webTechs);

