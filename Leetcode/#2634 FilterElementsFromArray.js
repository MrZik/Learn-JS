/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// 74 ms
// const filter = function(arr, fn) {
//     const filteredArr = [];
//     for(let i = 0; i < arr.length; ++i) {
//         fn(arr[i],i) && filteredArr.push(arr[i]);
//     }
//     return filteredArr;
// };

// 56 ms
// this modifies the input arr directly, not recommended depending on the use case
const filter = function(arr, fn) {
    let currentIndex = 0;

    for(let i = 0; i < arr.length; ++i) {
        if (fn(arr[i],i)) {
            (arr[currentIndex] = arr[i]);
            currentIndex++;
        };
    };
    arr.length = currentIndex;
    return arr;
};