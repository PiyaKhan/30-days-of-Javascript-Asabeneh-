const challenge = "30 days of Javascript ";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 1));
console.log(challenge.substring(3, 7));
console.log(challenge.substring(3, 21));
console.log(challenge.includes('script'));
console.log(challenge.split(' '));
// const company= 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
// console.log(company.split(', '));
console.log(challenge.replace('Javascript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf('days'));
console.log(challenge.lastIndexOf('a'));
const sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.charAt(31));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));
console.log(' 30 Days Of JavaScript '.trim());
console.log(challenge.startsWith('3'));
console.log(sentence.endsWith('n'));
console.log(challenge.match('a'));
console.log('30 day of '.concat('Javascript'));
console.log('Good Morning '.concat('Piya'));
console.log('Good Morning ' + 'Piya');
const name = 'Piya';
console.log(`Good Morning ${name}`);
console.log(challenge.repeat(2));

const sentence2 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(sentence2);

const MotherTeresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(MotherTeresa);

const num = '10'
console.log(parseInt(num));

const number2 = '9.8';
console.log(Math.ceil(number2));
console.log(number2 * 98);

const strings = "python,jargon";
console.log(strings.includes('on'));

const string = "I hope this course is not full of jargon";
console.log(string.includes('jargon'));

console.log(Math.floor(5.9));

const random = Math.random() * 100;
console.log(random);
console.log(Math.floor(random));


// return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
const random50 = Math.random() * (100 - 50 + 1) + 50;
console.log(Math.floor(random50));

const random255 = Math.floor(Math.random() * 255);
console.log(random255);

const randind = Math.floor(Math.random() * 9);
console.log('JavaScript'[randind]);

const pattern = '1 1 1 1 1\n2 1 2 4 8 \n3 1 3 9 27\n41 4 16 64\n5 1 5 25 125';
console.log(pattern);



const str1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
const firstindex = str1.indexOf('love');
const lastindex = str1.lastIndexOf('love');
const love = str1.substring(firstindex, lastindex);
console.log(str1.match(/love/gi));

const str = 'You cannot end a sentence with because because because is a conjunction';
const firstIndex = str.indexOf('because');
const lastIndex = str.lastIndexOf('is');
const because = str.substring(firstIndex, lastIndex);
console.log(because);
console.log(str.match('because'));

const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const pattern1 = /[%$!@#^&*;]/gi;
console.log(sentence3.replaceAll(pattern1, ''));



const data = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const number = data.match(/\d+/g);
let total = 0;
console.log(number);
number.forEach(num => {
    total += num;
});
console.log(total);
