/**
 * @param {number} n
 * @return {Function} counter
 */

// Basic closure
// variable directly modified and returned
// 62 ms
const createCounter = function(n) {
    let currentCount = n - 1;
    return function() {
        return currentCount += 1;
    };
};

// Basic closure
// variable modified before returning
// 67 ms
// const createCounter = function(n) {
//     let currentCount = n - 1;
//     return function() {
//         currentCount += 1;
//         return currentCount;
//     };
// };

// return then increment
// Postfix Increment Syntax
// 100 ms
// const createCounter = function(n) {
//     return function() {
//         return n++;
//     };
// };

// Prefix Decrement and Increment Syntax
// 66 ms
// const createCounter = function(n) {
//     --n;
//     return function() {
//         return ++n;
//     };
// };

// Postfix Increment Syntax With Arrow Function
// 72 ms
// const createCounter = function(n) {
//     return () => n++;
// };

// Postfix Increment Syntax With Arrow Function Single Line
// 84 ms
//const createCounter = (n) => () => n++;

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */