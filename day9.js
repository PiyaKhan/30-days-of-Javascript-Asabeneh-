/*
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

const upperCountry = countries.forEach((country, i) => `${i + 1}, ${country.toUpperCase()}`);
console.log(upperCountry);


function x(y) {
    console.log("Functioin X is calling");
    y();
};

function callbackY() {
    console.log("Function Y is calling")
}

x(callbackY);


const Countries = ["India", "Albania", "China", "Afganistan", "Pakistan"];

const UpperCountry = Countries.map((Country, i, array) => Country.toUpperCase());

console.log(UpperCountry);
*/


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Ethiopia']
const copyCountries = countries.slice(0);
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// 3.
countries.forEach((country) => console.log(country));
// 4.
names.forEach(namee => console.log(namee));
// 5.
numbers.forEach(number => console.log(number));
// 6.
const upperCountry = countries.map(country => country.toUpperCase());
console.log(upperCountry);

// 7.
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

// 8.
const squareNumbers = numbers.map(number => number * number);
console.log(squareNumbers);

// 9.
const upperNames = names.map(nam => nam.toUpperCase());
console.log(upperNames);

// 10.
const productAndPrice = products.map(prod => `${prod.product} ${prod.price}`);
console.log(productAndPrice);

// 11.
const filterCountry = countries.filter(country => country.toLowerCase().includes('land'));
console.log(filterCountry);

// 12.
const countriesCharacter = countries.filter(country => country.length === 6);
console.log(countriesCharacter);

// 13.
const sixAndMoreCountry = countries.filter(country => country.length >= 6);
console.log(sixAndMoreCountry);

// 14.
const filterCountries = countries.filter(country => country.startsWith('E'));
console.log(filterCountries);

// 15.
const valueProduct = products.filter(product => typeof product.price === 'number');
console.log(valueProduct);

// 16.
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c', [1, 2, 3]]
function getStringList(arr) {
    return arr.filter(item => typeof item === 'string');
}
console.log(getStringList(number));

// 17.
const sumOfNumbers = numbers.reduce((sum, cur) => sum + cur, 0)
console.log(sumOfNumbers);

// 18.

// 20.
const someNumbers = numbers.some(num => num.length === 7);
console.log(someNumbers);

// 21.
const landInCountries = countries.every(country => country.includes('land'));
console.log(landInCountries);

// 23.
const findCountries = countries.find(country => country.length === 6);
console.log(findCountries);

// 24.
const findCountryIndex = countries.findIndex(country => country.length === 6);
console.log(findCountryIndex);

// 25.
const findNorwayIndex = copyCountries.findIndex(country => country === 'Norway');
console.log(findNorwayIndex);

// 26.
const findRussiaIndex = copyCountries.findIndex(country => country === 'Russia');
console.log(findRussiaIndex);

/////////////////// Level- 2 //////////////////////

// 1.
const totalPrice = products.filter(prod => typeof prod.price === 'number')
    .reduce((acc, prod) => acc + prod.price, 0);
console.log(totalPrice);

// 2.
const sumOfProductsPrice = products.reduce((accumulator, product) => {
    return accumulator + (product.price ? Number(product.price) : 0);
}, 0)
console.log(sumOfProductsPrice);

// 3.
const countriesArr = [
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

const landCountries = countriesArr.filter(country => country.toLowerCase().includes('land'));
const iaCountries = countriesArr.filter(country => country.toLowerCase().includes('ia'));
const islandCountries = countriesArr.filter(country => country.toLowerCase().includes('island'));
const stanCountries = countriesArr.filter(country => country.toLowerCase().includes('stan'));

// console.log(landCountries);
// console.log(iaCountries);
// console.log(islandCountries);
// console.log(stanCountries);


// 4.
const frequentLetter = countriesArr.map(c => c[0]).reduce((acc, cur) => {
    if (acc[cur]) {
        acc[cur] = acc[cur] + 1;
    } else {
        acc[cur] = 1;
    }
    return acc;
}, {});

let arrayOfLettersObj = [];
for (const key in frequentLetter) {
    let obj = {};
    obj[key] = frequentLetter[key];
    arrayOfLettersObj.push(obj);
}
console.log(arrayOfLettersObj);


// 5.
const getFirstTenCountries = countriesArr.slice(0, 10);
console.log(getFirstTenCountries);

// 6.
const getLastTenCountries = countriesArr.slice(countriesArr.length - 10);
console.log(getLastTenCountries);

// 7.
let max = 0;
let maxLetter = '';
for (const key in frequentLetter) {
    const value = frequentLetter[key];

    if (value > max) {
        max = value;
        maxLetter = key;
    }
};

console.log(maxLetter);


///////// Level 3 //////////
// 1.
const sortedByCapital = countriesArray.sort((a, b) => {
    if (a.capital === '') return;
    if (a.capital > b.capital) return 1;
    if (a.capital < b.capital) return -1;
    return 0;
});
sortedByCapital.forEach(x => console.log(x.capital))

const sortedByPopulation = countriesArray.sort((a, b) => a.population - b.population);
// sortedByPopulation.forEach(p => console.log(p.population))


// 2.
function mostSpokenLanguage(countries, num) {
    const language = {}, languageArr = [];
    countries.forEach(country => {
        country.languages.forEach(lang => {
            if (language[lang]) language[lang] += 1;
            else language[lang] = 1;

        });
    })
    for (const key in language) {
        languageArr.push({ language: key, count: language[key] });
    }
    console.log(languageArr);
    const filteredArr = languageArr.sort((a, b) => b.count - a.count).slice(0, num);
    return filteredArr;

}
console.log(mostSpokenLanguage(countriesArray, 3));


// 3.
function mostPopulatedCountry(countries, num) {
    populationArr = [];
    countries.forEach(country => {
        // console.log(country);
        populationArr.push({ countryName: country.name, population: country.population })
    })
    console.log(populationArr);
    const filteredArr = populationArr.sort((a, b) => b.population - a.population).slice(0, num);
    return filteredArr;
}
console.log(mostPopulatedCountry(countriesArray, 10));


