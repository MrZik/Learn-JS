/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

const reduce = function(nums, fn, init) {
    return nums.length === 0 ? init : nums.reduce(fn,init);
};

// 89 ms
// Reduce Right
// const reduce = function(nums, fn, init) {
//     return nums.reverse().reduceRight(fn,init);
// };


// 64 ms
// const reduce = function(nums, fn, init) {
//     let n = nums.length, val = 0;

//     if (n === 0){
//         return init;
//     }

//     val = fn(init,nums[0]);

//     for(let i = 1; i < n; ++i){
//         val = fn(val,nums[i]);
//     }

//     return val;
// };

// const reduce = function(nums,fn,init){
//     let val = init;
//     for(let i = 0; i < nums.length; ++i){
//         val = fn(val,nums[i]);
//     }
// }

// 86 ms
// Using forEach
// const reduce = function(nums, fn, init) {
//     let val = init;
//     nums.forEach(num => {
//         val = fn(val,num);
//     });
//     return val;
// };

// 100 ms
// Recursion
// const reduce = function ReduceArray(nums, fn, init) {
//     if(nums.length === 0){
//         return init;
//     } else {
//         const head = nums[0];
//         const tail = nums.slice(1);
//         const val = fn(init,head);
//         return ReduceArray(tail,fn,val);
//     }
// };