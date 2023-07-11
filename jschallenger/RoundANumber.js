// TITLE
// Round a number to 2 decimal places

// DESCRIPTION
// Write a function that takes a number (a) as argument.
// Round a to the 2nd digit after the decimal point.
// Return the rounded number

function myFunction(a){
    let negative = false;
    if(a < 0){
        negative = true;
        a *= -1;
    }

    let b = parseFloat((a * 100).toFixed(11));
    b = Math.round(b) / 100;

    if(negative) {
        b *= -1;
    }

    // jsChallenger answer
    // return Number(a.toFixed(2));

    // We don't need the toFixed here because we made sure to have 2 decimal pts using the value 100
    //return (Math.round(b) / 100).toFixed(2);
    //return Math.round(b) / 100;
    return b;
}

console.log(myFunction(2.12397));
console.log(myFunction(3.136));
console.log(myFunction(1.12397));
console.log(myFunction(26.1379));

// TEST CASES:                      Expected
// myFunction(2.12397)               2.12
// myFunction(3.136)                 3.14
// myFunction(1.12397)               1.12
// myFunction(26.1379)               26.14
