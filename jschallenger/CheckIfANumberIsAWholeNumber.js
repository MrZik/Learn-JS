function MyFunction(a){
    // return true for whole numers, false for floats
    return Number.isInteger(a);
}

console.log(MyFunction(4));
console.log(MyFunction(1.123));
console.log(MyFunction(1048));
console.log(MyFunction(10.48));