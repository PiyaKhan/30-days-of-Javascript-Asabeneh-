/*
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10)

let n = 5
for (let i = 0; i <= n; i++) {
    console.log(i);
}

// 4.
let str = " ";
for (let i = 0; i < 7; i++) {
    str += "#";
    console.log(str);
}
//5.
for (let i = 0; i <= 10; i++) {
    console.log(`${i}*${i}=${i * i}`);
}
// 6.
for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i * i} ${i * i * i}`)

}
// 7.
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// 8.
for (i = 0; i <= 100; i++) {
    if (i % 2 > 0) {
        console.log(i)
    }
}
// 10.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log((sum));
// 11.
let even = 0;
let odd = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         even += i;
//     }
//     if (i % 2 !== 0) odd += i;
// }
// console.log(`Even: ${even} Odd:${odd}`);

// 12.
let evenOddArr = [];
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        even += i;
    }
    if (i % 2 !== 0) odd += i;
}
evenOddArr.push(even, odd);
// console.log(`Even: ${even} Odd:${odd}`);
console.log(evenOddArr);

// 13.
let randomArr = [];
for (let i = 0; i < 5; i++) {
    let randNumber = Math.floor(Math.random() * 10) + 1;
    randomArr.push(randNumber);
}
console.log(randomArr);

// 14.
let uniqueArr = [];
for (let i = 5; uniqueArr.length < i;) {
    let randNumber = Math.floor(Math.random() * 10) + 1;
    if (uniqueArr.indexOf(randNumber) === -1) {
        uniqueArr.push(randNumber);
    }
}
console.log(uniqueArr);
// 15.

const char = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randomChar = '';
for (let i = 0; i < 6; i++) {
    let charIndex = Math.floor(Math.random() * char.length);
    randomChar += char.charAt(charIndex);
}
console.log(randomChar);

// //level 2////
// 1.
const Char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randChar = '';
let randNumber = Math.floor(Math.random() * char.length);
for (let i = 0; i < randNumber; i++) {
    let CharIndex = Math.floor(Math.random() * Char.length);
    randChar += Char.charAt(CharIndex);
}
console.log((randChar));

*/

/*
// 2.
const chars = 'abcdef0123456789';
let hexNumber = '#';
for (let i = 0; i < 6; i++) {
    let charIndex = Math.floor(Math.random() * chars.length);
    // hexNumber += chars.charAt(charIndex);
    hexNumber += chars[charIndex];
}
console.log(hexNumber);

// 3.
let Arr = [];
for (i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * 255);
    Arr.push(randomNumber);
}
console.log(`rgb(${Arr[0]} ${Arr[1]} ${Arr[2]})`);

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
let countriesArr = [];
for (let i = 0; i < countries.length; i++) {
    const upperCountry = (countries[i].toUpperCase());

    countriesArr.push(upperCountry);
}
console.log(countriesArr);

// 8.

const iaArr = [];
for (i = 0; i < countries.length; i++) {
    if (countries[i].includes('ia')) {
        iaArr.push(countries[i])
    }
    else {
        console.log('These are countries without ia');
    }
}
console.log(iaArr);

// 9

let largestCountriesArr = [];

for (let i = 0; i < countries.length; i++) {
    largestCountriesArr.push(countries[i].length);
}
const maxNumber = Math.max(...largestCountriesArr);
// console.log(largestCountriesArr);
// console.log(maxNumber);
const index = largestCountriesArr.indexOf(maxNumber);
// console.log(index);
const largestCountry = countries[4];
console.log(largestCountry);

// 10

let largeCountriesArr = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        largeCountriesArr.push(countries[i])
    }
}
console.log(largeCountriesArr);

// 11

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

//   const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let techArr = [];
for (let i = 0; i < webTechs.length; i++) {
    techArr.push(webTechs[i].length);
}
const maximumNumber = Math.max(...techArr);
const ind = techArr.indexOf(maximumNumber);
const largestTechs = webTechs[ind];
console.log(largestTechs);

// 12
let techsArr = [];
for (let i = 0; i < webTechs.length; i++) {
    techsArr.push([webTechs[i], webTechs[i].length])
}
console.log(techsArr);

const mernStack = ["MongoDB", 'Express', 'React', 'Node'];
let m = '';
for (let i = 0; i < mernStack.length; i++) {
    m += mernStack[i].slice(0, 1);
};
console.log(m);

// 14.
for (const tech of webTechs) {
    console.log(tech);
}

// 15.
const fruit = ['banana', 'orange', 'mango', 'lemon'];
let reversedFruit = [];

for (let i = 0; i < fruit.length; i++) {
    reversedFruit.unshift(fruit[i]); // banana =>
    // [lemon, mango, orange, banana]
};
console.log(reversedFruit);

// 16.

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
//   const fullArr = [...fullStack[0], ...fullStack[1], ...fullStact[2]];

//   for (let i = 0; i < fullStack.length; i++) {

//       for (let k = 0; k < fullStack[i].length; k++) { // fullStack[0] => [HTML, CSS, ...]

//           console.log(fullStack[i][k].toUpperCase());

//       }
//   }
const fullArr = [...fullStack[0], ...fullStack[1]];

for (let i = 0; i < fullStack.length; i++) {
    console.log(fullStack[i].toUpperCase());
}

*/

/////level 3/////

// 1.
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

// 2
const modifyArr = countries.splice(0, 5);
console.log(modifyArr);
console.log(countries);
const sortedCountries = modifyArr.sort();
console.log(sortedCountries);

// 3.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
console.log(webTechs.sort());
console.log(mernStack.sort());

// 4.
const Countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

const landArr = [];
for (let i = 0; i < Countries.length; i++) {
    if (Countries[i].includes('land')) {
        landArr.push(Countries[i]);
    }
    else {
        console.log('These are countries without land');
    }
}
console.log(landArr);

// 6.
let countryArr = [];
for (let i = 0; i < Countries.length; i++) {
    countryArr.push(Countries[i].length);
}
const maximumNumber = Math.max(...countryArr);
const index = countryArr.indexOf(maximumNumber);
const largestCountry = Countries[index];
console.log(largestCountry);

// 7.
let fourCharArr = [];
for (let i = 0; i < Countries.length; i++) {
    if (Countries[i].length === 4) {
        fourCharArr.push(Countries[i])
    }
}
console.log(fourCharArr);

// 8.
const reverseArr = [];
const reverseCountry = Countries.reverse();
console.log(reverseCountry);
for (let i = 0; i < reverseCountry.length; i++) {
    reverseArr.push(reverseCountry[i].toUpperCase());
}
console.log(reverseArr);