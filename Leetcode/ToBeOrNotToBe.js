/**
 * @param {string} val
 * @return {Object}
 */

// Function Expression
// use Error instance instead of string
// 80 ms
const expect = function(val) {
    return {
        toBe: function(val2){
            if (val !== val2) throw new Error('Not Equal'); 
            return true;
        },
        notToBe: function(val2){
            if(val === val2) throw new Error('Equal');
            return true;
        }
    };
};

// Ternary operator
// 96 ms
// const expect = function(val) {
//     function throwError(message){
//         throw new Error(message);
//     };

//     return {
//         toBe:  val2 => {
//             return val === val2 || throwError('Not Equal');
//             },
//         notToBe: val2 => {
//             return val !== val2 || throwError('Equal');
//             }
//         }
// };

// Create function first then return
// 73 ms
// const expect = function(val){
//     const test = (condition, errorMessage) => {
//         if(condition) return true;
//         throw errorMessage;
//     };

//     const toBe = val2 => test(val === val2,'Not Equal');
//     const notToBe = val2 => test(val !== val2, 'Equal');

//     return {toBe,notToBe};
// };

// Using ES6 Classes
// class Expect {
//     constructor(val){
//         this.val = val;
//     }

//     toBe(val2){
//         if(this.val !== val2){
//             throw new Error('Not Equal');
//         }
//         return true;
//     }

//     notToBe(val2){
//         if(this.val === val2){
//             throw new Error('Equal');
//         }
//         return true;
//     }
// }

// const expect = function (val){
//     return new Expect(val);
// }



/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */