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

const ul = document.querySelector('.people');

const people = ['mario','luigi','ryu','shaun','chun-li'];

let html = ``;

people.forEach((person) => {
    html += `<li style="color: purple"> ${person}</li>`
});

console.log(html);
ul.innerHTML = html;

// ************************************************************
// ************************************************************