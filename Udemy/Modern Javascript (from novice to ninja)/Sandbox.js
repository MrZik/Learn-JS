// strings
// let a = 'Ezekiel';
// console.log('Hello');
// console.log('Hello' + ' ' + 'World');
// console.log(a[3]);
// console.log(a.length);
// let e = a.toUpperCase();
// console.log(a);
// console.log(e.includes("E"));
// from what index and how many total
//let result = a.slice(0,5);
//let result = a.substring(2,7);
// let result = a.replace('E','i');
// console.log(result);

// numbers
// B I D M A S
//let radius = 10;
//const PI = 3.14;
//console.log(radius**2 * PI);
//console.log(5 * (10-3)**2);
// use then increment
//console.log(radius++);
// increment then use, returns 12 in this case because we use radius++ above
// console.log(++radius);

// let arr = [6,3,2,7,1,5,4];
// let multiArr = [['inner one-one','inner one-two'],[20,21],3]
// console.log(arr.sort().reverse());
// console.log(multiArr[0][0]); // get the first index then the first index of that specific index
// multiArr.push([44,88,99,33]); // this add a new array at the last index.
// multiArr.push('new entry'); // adds one string entry at the last index
// console.log(multiArr);

// .pop() removes the last element in the array and assigns it to the variable
//let lastIndexFromMultiArr = multiArr.pop(); 
//console.log(lastIndexFromMultiArr);
//console.log(multiArr);

// .shift() removes the first element in the array and assigns it to the variable
//let firstIndexFromMultiArr = multiArr.shift();
//console.log(` first element: ${firstIndexFromMultiArr}`);
//console.log(`When using bacticks, it shows all the elements. ${multiArr}`);

// unshift adds to the first element
//multiArr.unshift(firstIndexFromMultiArr);
//console.log(multiArr);

// function without return
// function firstFunc(){
//     console.log('Hello world!');
// }

// function secondFunc(){
//     return 'Hello World';
// }

// firstFunc();
// secondFunc(); // this does nothing because the return is not being stored
// console.log(secondFunc());  // this shows the hello world because console.log gets the return value and shows it

// function firstFuncWithParam(a,b){
//     console.log(a + b);
// }

// firstFuncWithParam('hello ',2);

// let globalA = 5;

// function func1(){
//     let globalA = 51;
//     return globalA;
// }

// function func2(){
//     if(typeof a === 'undefined'){
//         console.log('Undefined.');
//     }
//     else{
//         console.log(a);
//     }
// }

// console.log(func1());
// console.log(globalA);
// func2();

// function nextInLine(arr,item){
//     arr.push(item);
//     return arr.shift(arr);
// }

// let testArr = [1,2,3,4,5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr,6));
// console.log("After: " + JSON.stringify(testArr));

// let count = 0;

// this will go pass case 2 3 4 5 then stop at 6 if the value is less than or equal to 6
// function cc(card){
//     switch(card){
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             ++count;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             --count;
//             break;
//         default:
//             break;
//     };

//     let holdBet = 'Hold';

//     if(count > 0){
//         holdBet = 'Bet'
//     }

//     return count + " " + holdBet;
// };

// console.log(cc('A'));

// Object
// bracket notation is used when the property has space in it
// let ourDog = {
//     "name": "Doggie",
//     "legs": 4,
//     "tails": 1,
//     "friends": ['everything']
// };



//console.log(ourDog.name);
//console.log(myComputer.gpu);
//console.log(myComputer["owner name"]);
//let gpu = 'gpu';
//console.log(myComputer[gpu]);

//myComputer.monitor[0] = 'asus'; // this changes the first index in the array only.
//myComputer.monitor = 'asus'; // this will change the value from array to string.
//console.log(myComputer.monitor);

//ourDog.bark = 'arf arf'; // add a new property.
//ourDog['bark'] = 'woof!'; // using bracket notation
//delete ourDog['bark'] || ourDog.bark; // delete a property
//console.log(ourDog.bark);



// instead of switch statement, we can use objects
// function computerLookUp(val) {
//     let result = '';

//     let myComputer = {
//         type : 'desktop',
//         monitor : ['legion','msi'],
//         motherboard : 'aorus',
//         gpu : 'rtx 3060',
//         mouse : 'red dragon',
//         keyboard : 'red dragon',
//         speaker : 'red dragon',
//         'owner name': 'zik'
//     };

//     // check if the object has that property
//     if(myComputer.hasOwnProperty(val)){
//         result = myComputer[val];
//         return result;
//     }

//     return result = 'not found.';
// }

// console.log(computerLookUp('ob'));

// Complex obects
// array storing objects
// let myMusic = [
//     {
//         artist: 'bruno mars',
//         title: "love's train",
//         'release year': '2021',
//         formats: [
//             'CD',
//             'Spotify',
//             'Itunes',
//             'Youtube'
//         ],
//         grammy: true 
//     },
//     {
//         artist: 'michael buble',
//         title: "everything",
//         'release year': '2010',
//         formats: [
//             'CD',
//             'Spotify',
//             'Itunes',
//             'Youtube'
//         ],
//         grammy: false 
//     }
// ];

//console.log(myMusic[0].formats[1]);

// obects in an object
// let myStorage = {
//     car: {
//         inside: {
//             'glove box': 'maps',
//             'passenger seat': 'crumbs'
//         },
//         outside: {
//             trunk: 'jack'
//         }
//     }
// };

// must access the property in order, you cannot do myStorage.inside['glove box']
//console.log(myStorage.car.inside['glove box']);

// let collection = {
//     2548: {
//         album: 'Slippery when wet',
//         artist: 'Bon Jovi',
//         tracks: [
//             'Let it rock',
//             'You give love a bad name'
//         ]
//     },
//     2468:{
//         album: '1999',
//         artist: 'Prince',
//         tracks: [
//             '1999',
//             'Little red corvette'
//         ]
//     }
// };

// keep a copy of the collection for tests
// let collectioncopy = JSON.parse(JSON.stringify(collection));

// function updateRecord(id,prop,val){
//     // delete the property if its empty string
//     if(val === ''){
//         delete collection[id][prop]
//     } else if(prop === 'tracks'){
//         // if the property exists it will assign itself, if not, assgi an empty array
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(val);
//     } else {
//         // we only need to access the property to change it's value
//         collection[id][prop] = val;
//     }

//     return collection;
// }

// console.log(updateRecord(2548,'artist','abba'));

// let emptyArr = [];
// let filledArr = [9,10,11,12];
// let multiArr = [[1,2],[3,4],[5,6,7]];

//let i = 10;

// while(i < 5){
//     myArr.push(i);
//     ++i;
// }

// for(let i = 1; i < 6; ++i){
//     myArr.push(i);
// }

// loop thru odd number
// for(let i = 1; i < 10; i += 2){
//     myArr.push(i);
// }

// for(let i = 9; i > 0; i -= 2){
//     myArr.push(i);
// }

// let product = 1;

// for(let i = 0; i < multiArr.length; ++i){
//     for(let j = 0; j < multiArr[i].length; ++j){
//         product *= multiArr[i][j];
//     }
// }

// do{
//     emptyArr.push(i);
//     ++i;
// }while(i < 5){

// }

//console.log(emptyArr);

// let contacts = [
//     {
//         firstname: 'john',
//         lastname: 'doe',
//         number: 123456,
//         like: ['javascript','C#']
//     },
//     {
//         firstname: 'mary',
//         lastname: 'anne',
//         number: 98765,
//         like: ['typscript','C++']
//     },
// ];

// function lookUpProfile(name,prop){
//     for(let i = 0; i < contacts.length; ++i){
//         if (contacts[i].firstname === name){
//             return contacts[i][prop] || 'No property found.';
//         }
//     }
//     return 'No contact found.';
// }

// console.log(lookUpProfile('john','lastname'));

// function randomFraction(){
//     return Math.floor(Math.random() * 20);
// }

// function randomRange(min,max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function convertToInt(str){
//     return parseInt(str);
// }

// function convertToIntRadix(str){
//     return parseInt(str,2); // convert the binary to int
// }

// console.log(convertToIntRadix('10011'));

// function checkEqual(a,b){
//     //return a === b ? true : false;
//     //return a !== b && true; // if true
//     //return a === b || false; // if false
// }

// function checkSign(num){
//     return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
// }

// console.log(checkSign(10));

// function checkScope(){
//     //let i = 0;
//     if(true){
//         let i = 1;
//         console.log('Block scope i is: ' + i);
//     }
//     console.log('Function scope i is: ' + i);
//     return i;
// }

// checkScope();

// const s = [5,7,1];

// function editArr(){
//     //s = [2,1,3]; // this is not allowed with const
//     // this is allowed even with const
//     s[0] = 99;
//     s[1] = 54;
// }
// editArr();
// console.log(s);

// function freezeObj(){
//     // property inside an object can still be mutated even if the object is const

//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };

//     // by using Obect.freeze(), we prevent mutation of the properties inside an object
//     Object.freeze(MATH_CONSTANTS);

//    //MATH_CONSTANTS.PI = 99;

//     try{
//         MATH_CONSTANTS.PI = 99;
//     }catch(ex){
//         console.log(ex);
//     }

//     console.log(MATH_CONSTANTS);
// }

// freezeObj();

// Arrow functions
// const magic = () => new Date();

// const concat = (arr1,arr2) => arr1.concat(arr2);

// console.log(concat([1,2],[3,4]));

// const realNumberArray = [4,5.6,-1,-9.8,42,6,8.34,-2];

// const squareList = (arr) => {
//     const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
//     return squaredIntegers;
// };

// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// const increment = (function() {
//     return function increment(number, value = 1){
//         return number + value;
//     };
// })();

// console.log(increment(5,2));
// console.log(increment(5));

// use rest operator
// ...args automatically puts the arguments in an array under the name args
// const sum = (function(){
//     return function sum(...args){
//         return args.reduce((a,b) => a + b,0);
//     }
// })();

// console.log(sum(1,2,3));

// use spread operator
// expands an already existing array, or spread it

// const arr1 = ['JAN','FEB','MAR','APR','MAY'];
// let arr2;
// (function(){
//     arr2 = [...arr1]; // now arr2 is a COPY not EQUAL to arr1
//     arr1[0] = 'potato'
// })();
// console.log(arr2);

// function and(a,b){
//     return a && b;
//     //return a ? b ? true : false : !b ? false : true;
// }

// console.log(and(false,true));

// function inclusiveArrayParam(startVal, endVal) {
//     const arr = []
//     for(let i = startVal; i <= endVal; i++) {
//         arr.push(i)
//     }
//     return arr
// }

// console.log('iterative inclusive array solution: ', inclusiveArrayParam(2, 6));

// function inclusiveArrayParamRecursive(startVal, endVal) {
//     if(startVal >= endVal){
//         return [startVal];
//     } else{
//         const arr = inclusiveArrayParam(startVal,endVal - 1);
//         arr.push(endVal);
//         return arr;
//     }
// }

// console.log('recursive inclusive array solution: ', inclusiveArrayParamRecursive(2, 6))
// Base Case sets the loop paramenters to return the startVal.
// Once the start value equals end value we return the call stack to unwind.


// When the property you want inside an object already exists outside and you want to use it,
// if they have the same naming, ei. name: name... then you can ommit the :name
// const name = 'Pedro';
// const age = 20;

// const person = {
//     name,
//     age,
//     isMarried: false
// };

// person 2 will be the same as person but the name will be jack
//const person2 = {...person,name: 'jack'};

// copy all index of names into names2 then push/add joel
// const names = ['jack','pedro','jessica','pedro','pedro'];
// const names2 = [...names, 'joel'];

// basically for each item (name) in names, item + '1
// you replace the index with what you return. in this case, we use the index + '1'
// names.map((name) => {
//     return name += '1';
// });

// names.map(x => console.log(x));

// filter must use condition when returning?
// in this case the name pedro will be ommitted
//console.log(names.filter(x => {return x !== 'pedro'}));

// .map()
// .filter()
// .reduce()

//const {name,age,isMarried} = person;
//console.log(person);
//console.log(person2);
//console.log(names);
//console.log(names2);

// function expression
// when a variable is set to function
// JS DOES NOT HOIST FUNCTION EXPRESSION!!!
// const speak = function(name = 'luigi', time = 'night'){
    // use string template
// console.lost(`Good ${time} ${name}!`);
// };

// This is how you use or call a function expression
// speak('Mario');
// speak();
// speak('Momo','night');

// this is not a function expression, only a arrow function declaration
// () => console.log('hello there');

// this is how you call a function
// greet();

// const calcArea = radius => 3.14 * radius**2;
// const greet = () => console.log('hello there');
// greet();
// console.log(calcArea(5));

// const bill = (products, tax) => {
//     return products.reduce((accumulator,current) => accumulator + current + current * tax,0);
// };

// const bill = (products,tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; ++i){
//         total += products[i] + products[i] * tax;
//     };
//     return total;
//   };

//console.log((bill([10,15,30],0.2)));

// ************************************************************
// ************************************************************

// const ul = document.querySelector('.people');

// const people = ['mario','luigi','ryu','shaun','chun-li'];

// let html = ``;

// people.forEach((person) => {
//     html += `<li style="color: purple"> ${person}</li>`
// });

// console.log(html);
// ul.innerHTML = html;

// ************************************************************
// ************************************************************

// Objects uses key: 'value' pair
// you must use the regular function() {} when you want to use the this keyword
// or you can use the function name then () ex login() {}

// const blogs = [
//     { title: 'Why mac & cheese rules', likes: 30},
//     { title: '10 things to make marmitte', likes: 50}
// ];

//console.log(blogs);

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@gmail.com',
//     location: 'Berlin',
//     blogs: [{ title: 'Why mac & cheese rules', likes: 30},
//     { title: '10 things to make marmitte', likes: 50}],
//     login: function(){
//         console.log('The user logged in.');
//     },
//     logout(){
//         console.log('The user logged out.');
//     },
//     logBlogs() {
//         console.log('This user has written the following blogs:');
//         this.blogs.forEach(blog => {console.log(blog.title , blog.likes)});
//     }
// };

// console.log(user);
// console.log(user.name);

// user.age = 35;

// console.log(user.age);

// console.log(user['email']);

// user['name'] = 'chun-li';
// console.log(user['name']);

// user.login();
// user.logout();
//user.logBlogs();

// ************************************************************
// ************************************************************

// MATH
// console.log(Math); // if you check this in the browser console, it will show you the properties of Math

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area)); // take away the decimal and leave with the integer

// // random numbers

// const random = Math.random(); // 0 - 1 exclusive 1
// console.log(Math.round(random)); // this will include 1 because it rounds up
// console.log(Math.round(random) * 100); // 0 or 100
// console.log(random * 100); // 0 - 99.999999

// ************************************************************
// ************************************************************

// Primitive types and reference tpes
// primitive type => stack = limited, faster
// reference type => heap = more space, slower

// primitive
// numbers
// strings
// booleans
// null
// undefined
// symbols

// reference type
// all types of objects
// object literal
// array
// functions
// dates
// all other objects like math objects

// if we create the initial variable userOne with an object (reference type)
// the const userOne will be added to the stack with a pointer to the object
// because the object will be placed in the heap
// const userOne = {name: 'shaun',score: 100};

// Now when we create a new variable that takes in the userOne as it value
// const userTwo will still be added to the stack but will have the same pointer
// as userOne, meaning the object {name:...} will not be created in the heap a second time
// there will be only ONE object {name...} with two pointers to it, ei userOne and userTwo pointers
// const userTwo = userOne;

// When you updated userOne, it will then update userTwo because they point to the same object in the heap
// const userOne = {name: 'shaun', score: 50}

// primitive types

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

// reference types

// const userOne = {name: 'ryu',age: 30};
// const userTwo = userOne;

// console.log(userOne,userTwo);

// userTwo.age = 50;

// console.log(userOne,userTwo);

// let user = {
//     name: "John",
//     hi() { alert(this.name); },
//     bye() { alert("Bye"); }
// };

// object dot method;
// user.hi();

// evaluated method;
// notice that the conditional statement is inside the () 
// then another () is added after the check 
// (user.name == "John" ? user.hi : user.bye)();
  


// ************************************************************
// ************************************************************

// ARRAY METHODS

//const scores = [10,30,15,25,50,40,5];

// filter is none destructive
// this returns a new array
// const filteredScores = scores.filter((score)=>{
//     return score > 20;
// });

// // this will still show the original array
// console.log(scores);

// console.log(filteredScores);

// const users =[
//     {name: 'shaun', premium: true},
//     {name: 'yoshi', premium: false},
//     {name: 'mario', premium: false},
//     {name: 'chun-li', premium: true},
// ];


// *************************************************************************************************
// *************************************************************************************************

// Filter Method
// const premiumUsers = users.filter(user => user.premium === true);
// console.log(premiumUsers);

// *************************************************************************************************
// *************************************************************************************************

// Map Method
// iterates a thru the array and returns a new array
// Non-destructive
// the parameter we pass is directly the object not a copy
//const prices = [20,10,30,25,15,40,80,5];
// const salePrices = prices.map(price => price / 2);
// console.log(salePrices);

// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'mushroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price: 50}
// ];

// We do not do this, accessing directly the property because this will become destructive
// we are editing the product.property directly
// the parameter we pass is directly the object not a copy
// const saleProducts = products.map(product => {
//     if(product.price > 30){
//        product.price /= 2;
//        return product;
//     } else{
//         return product;
//     }
// });

// This will not change the original object
// const saleProducts = products.map(product => {
//     if(product.price > 30){
//         return {name: product.name, price: product.price / 2};
//     } else{
//         return {name: product.name, price: product.price};
//     }
// });

// console.log(saleProducts);
// console.log(products);

// *************************************************************************************************
// *************************************************************************************************

// Reduce Method
//const scores = [10, 20, 60, 40, 70 , 90, 30];
// const result = scores.reduce((acc,curr) => {
//     if(curr > 50){
//         acc++;
//     }

//     return acc;
// }, 0);

// console.log(result);

// const scores = [
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60},
// ];

// const marioTotal = scores.reduce((acc,curr) => {
//     if(curr.player === 'mario'){
//         acc += curr.score;
//     }
//     return acc;
// }, 0);

// console.log(marioTotal);

// *************************************************************************************************
// *************************************************************************************************

// Find method
// returns the first 'true' value and will not carry on to the rest of the array
// const scores = [10, 5 ,0, 40, 60, 10, 20, 70];
// const firstHighScore = scores.find(score => score > 50);

// console.log(firstHighScore);

// *************************************************************************************************
// *************************************************************************************************

// Sort Method
// this is destructive
// this is destructive
// sorting strings
//const names = ['mario','shaun','chun-li','yoshi','luigi'];
// sorting numbers
// const scores = [10, 50, 20 , 5, 35, 70, 45];
// sorting objects
// const players = [
//     {name: 'mario', score: 20},
//     {name: 'luigi', score: 10},
//     {name: 'chun-li', score: 50},
//     {name: 'yoshi', score: 30},
//     {name: 'shaun', score: 70},
// ];
// this only takes the first number ei 1 in 10, 5 in 50
// that's why 10 is first instead of 5
// scores.sort()
// scores.reverse();
// console.log(scores);

// names.sort();
// names.reverse();
// console.log(names);
// a and b can be the first index and second index,
// or the first index score or the second index score
// 0 +1 -1
// if a should go first -1
// if b +1
// if no reordering 0

// sort descending order
// players.sort((a,b) => {
//     if(a.score > b.score){
//         return -1;
//     } else if( b.score > a.score){
//         return 1;
//     } else {
//         return 0;
//     }
// });

// this is the same as the one above
// if b is greater than a, then we will get a positive 1
// meaning b will come first
// else it will return a -1, meaning a will come first
// if result is 0, then no change will happen
// players.sort((a,b) => b.score - a.score);

// console.log(players);

// ascending order
// always remember when a goes first, it will ascending order
// scores.sort((a,b) => a - b);
// console.log(scores);

// chaining array methods
// const products = [
//     {name: 'gold star', price: 30},
//     {name: 'green shell', price: 10},
//     {name: 'red star', price: 40},
//     {name: 'banana skin', price: 5},
//     {name: 'mushroom', price: 50},
// ];

// this returns a new array with the string template as it's value
// const promos = products
//     .filter(product => product.price > 20)
//     .map(product => `the ${product.name} is ${product.price / 2} pounds`);

// console.log(promos);


// *************************************************************************************************
// *************************************************************************************************

// dates & times
// date is an object data type
// const now = new Date();
// const before = new Date('February 1 2022 7:30:59');

// console.log(now);
// years, months, day, times
// console.log('getFullYear:', now.getFullYear());
// this returns the index of the month in an array
// console.log('getMonth:', now.getMonth());
// console.log('getDate:', now.getDate());
// sunday - 0
// console.log('getDay:', now.getDay());

// console.log('getHourse:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

// timestamps
// from 12:00am jan 1 1970
// console.log('timestamp:', now.getTime());

// date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

//console.log(now.getTime(), before.getTime());

// const diff = now.getTime() - before.getTime();
//console.log(diff);

// const mins = Math.round(diff / 1000 / 60);
// const hrs = Math.round(mins / 60);
// const days = Math.round(hrs / 24);

// console.log(days , hrs, mins);

// console.log(`the blog was written ${days} days ago.`);

// converting timestamps into date objects
// const timestamp = 1675938474990;
// console.log(new Date(timestamp));


// *************************************************************************************************
// *************************************************************************************************

const now = new Date();

// console.log(dateFns.isToday(now));

// formatting options
// console.log(dateFns.format(now, 'YYYY'));
// console.log(dateFns.format(now, 'MMMM'));
// console.log(dateFns.format(now, 'dddd'));
// console.log(dateFns.format(now, 'Do'));
// console.log(dateFns.format(now, 'dddd - Do - MMMM - YYYY'));

// comparing dates
// const before = new Date('February 1 2023 12:00:00');

// console.log(dateFns.distanceInWords(now,before, {addSuffix: true}));


// *************************************************************************************************
// *************************************************************************************************


// async and promises

// const getTodos = (resource) => {
//     return new Promise((resolve,reject) => {
//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', () => {
//             //console.log(request,request.readyState);
//             // means it's completed
//             if(request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//                 //callback(undefined, data);
//                 //console.log(request.responseText);
//             } else if(request.readyState === 4) {
//                 reject('could not fetch data');
//                 //callback('could not fetch the data', undefined);
//                 //console.log('could not fetch the data.');
//             }
//         });
//         //request.open('GET','https://jsonplaceholder.typicode.com/todos/');
//         request.open('GET', resource);
//         request.send();
//     });
// }

// console.log(1);
// console.log(2);

// getTodos('luigi.json').then(data => { 
//     console.log('promise 1 resolved.', data);
//     return getTodos('mario.json');
// }).then(data => {
//     console.log('promise 2 resolved.', data);
//     return getTodos('shaun.json');
// }).then(data => {
//     console.log('promise 3 resolved', data);
// }).catch(err => console.log('promise rejected:', err));

// callback hell
// convention error first before data
// getTodos('luigi.json', (err, data) => {
//     console.log('callback fired');
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//         getTodos('mario.json', (err,data) => {
//             console.log(data);
//             getTodos('shaun.json',(err,data) => {
//                 console.log(data);
//             });
//         });
//     }
// });

// console.log(3);
// console.log(4);

// *************************************************************************************************
// *************************************************************************************************


// promise example

// const getSomething = () => {
//     return new Promise((resolve,reject) => {
//         // fetch something
//         //resolve('some data');
//         reject('some error');
//     });
// };

// getSomething().then((data) => console.log(data),
//     (err) => console.log(err));

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });


// *************************************************************************************************
// *************************************************************************************************

// FETCH API

// this returns a promise
// we get error when we get network errors ex. api cannot be reached
// fetch('mario.json').then(response => {
//     console.log('resolved',response);
//     // this returns a promise
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console('rejected',err);
// });

// THIS WHAT WE WILL USE FROM NOW ON
// this now returns a promise because of the async
// const getTodos = async() => {
//     const response = await fetch('marios.json');

//     if(response.status != 200){
//         // this will now become the err.message below
//         throw new Error('cannot fetch data.');
//     }

//     const data = await response.json();
//     return data;
// };

// console.log(1);
// console.log(2);

// getTodos()
//     .then(data => console.log('resolved', data))
//     .catch(err => console.log('rejected', err.message));

// console.log(3);
// console.log(4);

// *************************************************************************************************
// *************************************************************************************************

// This stays in the browser even if you refresh the page
// storaging values will become a string

// store data in local storage
// localStorage.setItem('name','mario');
// localStorage.setItem('age',50);

// get data from local storage
// let name = localStorage.getItem('name');

// updateing data
// if name exists, it replaces it, else it will create a new key-value pair
// localStorage.setItem('name','shaun');
// this might not work the same as the one above
// localStorage.age = '40';

// deleteing data
// key param
// localStorage.removeItem('name');
// no argumnet, this is like the clear() of list C#
// localStorage.clear();

// const todos = [
//     {text: 'something', author: 'sopmeone'},
//     {text: 'something', author: 'sopmeone'},
//     {text: 'something', author: 'sopmeone'},
// ];

// turns everything inside to a string to be used as a valid jason
// JSON.stringify(todos);

// localStorage.setItem('todos',JSON.stringify(todos));

// this is now an array
// const stored = localStorage.getItem(JSON.parse('todos'));


// *************************************************************************************************
// *************************************************************************************************

// OOP

// create a new array
// this is the constructor of the array class
// const ages = new Array(20,10,25,35);

// const names = ['shaun','mario'];

// const userOne = {}
// object literal
// this construcs a new object
// const userTwo = new Object()

// if we want to create a lot of users,
// we will have to do this all the time normally
// const userOne = {
//     username: 'ryu',
//     email: 'ryi@email.com',
//     login(){
//         console.log('logged in');
//     },
//     logout(){
//         console.log('logged out')
//     }
// };

// console.log(userOne.username, userOne.email);
// userOne.login();

// if we have a class, we can do this
// const userThree = new User('shaun','shaun@mail.com');

// class User{
        // classes automatically puts
        // these functions in the __proto__
//
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//         this.score = 0;
//     }

//     // Using return 'this' will allow us to chain together functions
//     // because we are returning the object itself.

//     // we do not use the arrow function
//     // because the 'this' keyword will refer to the window object
//     // instead of this object instance
//     login(){
//         console.log(`${this.name} logged in`);
//         return this;
//     }

//     logout(){
//         console.log(`${this.name} logged out`);
//         return this;
//     }

//     increaseScore(){
//         this.score++;
//         console.log(`${this.name} has a score of ${this.score}`);
//         return this;
//     }
// }

// console.log(user);
// console.log(user.name);
// console.log(user.email);
// user.login();
// user.logout();
// user.login().increaseScore().increaseScore().logout();

// class Admin extends User {
//     constructor(name, email, title) {
//         // looks at the parent class then the constructor
//         super(name, email);
//         this.title = title;
//     }

//     deleteUser(user){
//         users = users.filter(u => u.name !== user.name);
//     }
// }

// const userThree = new Admin('shaun','shaun@email.com','manager');
// console.log(userThree);
// userThree.login();

// let users = [userOne,userTwo,userThree];

// userThree.deleteUser(userTwo);
// console.log(users);
// console.log(userThree.title)

// old way of constructor
// under the hood
function User(username, email) {
    this.username = username;
    this.email = email;

    // This functions are now inside the constructor
    // or object
    // unlike classes, classes automatically puts
    // these functions in the __proto__
    // this.login = function(){
    //     console.log(`${this.username} has logged in.`);
    // }
};

// Prototype

// Prototype contain all the moethods for that object type

// This now stores login function in the protype
// this is stored only in one place and the new instance
// wil just have a pointer to it
// adding return this will allow chaining of fn()
User.prototype.login = function() {
    console.log(`${this.username} has logged in.`);
    return this;
};

User.prototype.logout = function(){
    console.log(`${this.username} has logged out.`);
    return this;
}

function Admin(username, email,title) {
    // first param is the context for the this keyword
    // what the this keyword refers to
    // we pass this so we can refer to the object we created
    // ei the new Admin object
    User.call(this, username, email);
    this.title = title;
};

// Creates a new object
// we now have a copy of the User.prototype
// inside the Admin.prototype
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
    // delete a user
};

const userOne = new User('ruy','ruy@email.com');
const userTwo = new User('mik','mik@email.com');
const userThree = new Admin('chiu','chiu@email.com','black-belt-ninja');

console.log(userOne,userTwo,userThree);
userOne.login();
// this is actually pointing to the User.proto
// because we are inherting
// there will now be 2 __proto__ when we check it in the browser console
userThree.login();


// *************************************************************************************************
// *************************************************************************************************