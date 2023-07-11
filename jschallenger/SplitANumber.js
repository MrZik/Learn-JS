// TITLE
// Split a number into its digits

// DESCRIPTION
// Write a function that takes a number (a) as argument.
// Split a into its individual digits and return them in an array. 
// Tipp: you might want to change the type of the number for the splitting

function myFunction(a) {
    //jschallenger answer
    //return stringArray = a.toString().split('').map(x => Number(x));
    
    //return [...a+''].map(x =>+x);

    let num = a;
    let output = [];
    while(num){
        output.unshift(num % 10);
        num = Math.floor(num/10);
    }

    return output;
}

console.log(myFunction(10));                //Expected [1,0]
console.log(myFunction(931));               //Expected [[9,3,1]
console.log(myFunction(193278));            //Expected [1,9,3,2,7,8]
