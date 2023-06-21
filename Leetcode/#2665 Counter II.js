/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

// Declare seperate function before returning them
// 75 ms
const createCounter = function(init) {
    let a = init;

    const increment = () => ++a;
    const decrement = () => --a;
    const reset = () => a = init;

    return {increment,decrement,reset};
};

// Declare return then create the functions
// 64 ms
// const createCounter = function(init) {
//     let a = init;

//     return {
//         increment: function(){
//             return ++a;
//         },
//         decrement: function(){
//             return --a;
//         },
//         reset: function(){
//             return a = init;
//         }
//     };
// };

// Declare return then create the arrow functions
// 64 ms
// const createCounter = function(init) {
//     let a = init;

//     return {
//         increment: () => ++a,
//         decrement: () => --a,
//         reset: () => a = init
//     };
// };


// using ES6 class
// 81 ms
// class Counter{
//     constructor(init){
//         this.init = init;
//         this.originalValue = init;
//     }

//     increment(){
//         return ++this.init;
//     }

//     decrement(){
//         return --this.init;
//     }

//     reset(){
//         return this.init = this.originalValue;
//     }
// }

// const createCounter = function(init) {
//    return new Counter(init);
// };



/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */