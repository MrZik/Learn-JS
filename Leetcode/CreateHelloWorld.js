/**
 * @return {Function}
 */

// normal declaration
// 63 ms
const createHelloWorld = function() {
    return function(...args){
        return 'Hello World';
    }
};

// function within a function
// 67ms
// const createHelloWorld = function(){
//     function f(...args){
//         return 'Hello World';
//     }
//     return f;
// }

// Basic arrow syntax
// 63 ms
//const createHelloWorld = () => {
//    return (...args) => 'Hello World';
//};

// Arrow syntax skipping return keyword and no ...args
// 102 ms
//const createHelloWorld = () => () => 'Hello World';

// Arrow syntax skipping return keyword with args
// 79 ms
//const createHelloWorld = (...args) => (...args) => 'Hello World';

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */