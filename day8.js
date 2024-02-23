const profile = {
    firstName: 'Piya',
    lastName: 'Khan'
};
const Name = 'firstName';
console.log(profile[Name]);

profile.skills = ['JavaScript', 'React', 'HTML']
profile['isMarried'] = false
profile.eligible = true;
console.log(profile);
// const copyProfile = profile.assign({});
// console.log(copyProfile);
const keys = Object.keys(profile);
console.log(keys);

const value = Object.values(profile);
console.log(value);


////////level 1/////////

// 1.
const dog = {
    Name: 'Bujo',
    legs: 4,
    color: 'white',
    age: 10,
    bark: function () {
        return 'Woof woof';
    },
    breed: 'lab',
    dogInfo() {
        return this;
    }
}
console.log(dog);
console.log(dog.bark());
console.log(dog.dogInfo());

// //level 2/////

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let max = 0;
let winner = 0;
for (let user in users) {
    let arrLength = users[user].skills.length
    if (arrLength > max) {
        max = arrLength;
        winner = user;
    }
}
console.log(max);
console.log(winner);

// 2.
let maxPoints = 0;
let loggedInUsers = 0;
for (let user in users) {
    if (users[user].isLoggedIn) loggedInUsers += 1;
    if (users[user].points >= 50) maxPoints += 1
}
console.log(maxPoints);
console.log(loggedInUsers);

// 3.
let mernUser = [];
for (let user in users) {
    let skillArr = users[user].skills;
    if (skillArr.includes('MongoDB') && skillArr.includes('Express') && skillArr.includes('React') && skillArr.includes('Node')) {
        mernUser.push(user);
    }
}
console.log(mernUser.join(' and '));

// 4.
let copyUsers = Object.assign({}, users);
let obj = {
    firstName: 'Piya',
    age: 24,
}
obj.college = 'UEM';
console.log(obj);
copyUsers.khan = obj
console.log(copyUsers);

// 5.
const Keys = Object.keys(users);
console.log(Keys);

// 6.
const Values = Object.values(users);
console.log(Values);

// 7.
let countrys = [{
    name: 'Zambia',
    capital: 'Lusaka',
    languages: ['English'],
    population: 15933883,
    flag: 'https://restcountries.eu/data/zmb.svg',
    currency: 'Zambian kwacha'
},
{
    name: 'Zimbabwe',
    capital: 'Harare',
    languages: ['English', 'Shona', 'Northern Ndebele'],
    population: 14240168,
    flag: 'https://restcountries.eu/data/zwe.svg',
    currency: 'Botswana pula'
}]
for (let country of countrys) {
    console.log(country);
    const countryName = country.name;
    const capital = country.capital;
    const population = country.population;
    const languages = country.languages.join(',');

    console.log(`${countryName} has population of ${population} people. It's capital is ${capital}.They know ${languages}.`);
}


////////level 3////////

// 1.
const personAccount = {
    firstName: 'Piya',
    lastName: 'Khan',
    incomes: {
        salary: 15000,
        tuition: 30000,
        course: 5000
    },
    expenses: {
        food: 3000,
        rent: 3000,
        transport: 1500
    },
    totalIncome() {
        let total = 0
        for (let income in this.incomes) {
            total += this.incomes[income];
        }
        return total;
    },
    totalExpense() {
        let total = 0;
        for (let expense in this.expenses) {
            total += this.expenses[expense];
        }
        return total;
    },
    accountInfo() {
        return `Name :${this.firstName} ${this.lastName}\n TotalIncome:${this.totalIncome()}.\n Total Expense:${this.totalExpense()}.`;
    },

    addIncome(incomeType, money) {
        this.incomes[incomeType] = money;
        return this.incomes;
    },

    addExpense(expenseType, money) {
        this.expenses[expenseType] = money;
        return this.expenses;
    },
    accountBalance() {
        this.balance = this.totalIncome() - this.totalExpense();
        return this.balance;
    }

}
// console.log(personAccount.totalIncome());
// console.log(personAccount.totalExpense());
// console.log(personAccount.accountInfo());
// console.log(personAccount.addIncome('bonus', 5000));
// console.log(personAccount.addIncome('shopping', 15000));
// console.log(personAccount.accountBalance());
// console.log(personAccount);


// 2.
const Users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

function signUp(userName, password, email) {
    for (let user of Users) {
        if (email === user.email) return 'User already exist';
    }
    /*let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDay();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let dateTime = `${day}/${month}/${year} ${hours}:${minute}`;
    OR*/
    const dateObject = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    const today = new Date();
    const date = new Intl.DateTimeFormat(navigator.language, dateObject).format(today);

    // create an Id
    let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let id = '';
    for (let i = 0; i < 6; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }

    // create an account object
    const userObj = {
        _id: id,
        username: userName,
        email: email,
        password: password,
        createdAt: date,
        isLoggedIn: false
    }
    Users.push(userObj);
}
console.log(signUp('Piya', '251827', 'piya@gmail.com'));
console.log(Users);

function signIn(email, password) {
    for (const user of Users) {
        if (user.email === email && user.password === password) {
            user.isLoggedIn = true;
            return `you've successfully logged in.`;
        };
    }
    return 'Incorrect email and password!⚠️';
}
console.log(signIn('asab@asab.com', '123456'));


// 3.

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

function rateProduct(userId, ratings, productNum) {
    const rate = {
        userId: userId,
        rate: ratings
    }
    products[productNum - 1].ratings.push(rate);
};
rateProduct('09876', 4, 2);
console.log(products);

function averageRating(productId) {
    let myProduct;
    totalRating = 0;
    for (let product of products) {
        if (products._id = productId) myProduct = product;
    }
    for (let ratingsObj of myProduct.ratings) {
        totalRating += ratingsObj.rate;
    }
    const numberOfRatings = myProduct.ratings.length;
    if (numberOfRatings > 0) return totalRating / numberOfRatings;
    else return 'Not enough ratings.'
}
const print = console.log;
print(averageRating('eedfcf'));

// 4.
function likeProduct(userId, productNum) {
    const myProduct = products[productNum - 1];
    const index = myProduct.likes.indexOf(userId);

    if (index === -1) myProduct.likes.push(userId)
    else myProduct.likes.slice(index, 1);
}
likeProduct('pk1234', 2);
console.log(products);