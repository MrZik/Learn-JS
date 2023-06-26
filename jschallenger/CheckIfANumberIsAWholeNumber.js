function MyFunction(a){
    // return true for whole numers, false for floats
    //return Number.isInteger(a);

    // this will return a negative value if it can be rounded of
    // or the decimal point if it cannot be rounded off
    // then 0 if it is a whole number
    return a - Math.floor(a) === 0;
}

console.log(MyFunction(4));
console.log(MyFunction(1.123));
console.log(MyFunction(1048));
console.log(MyFunction(10.48));