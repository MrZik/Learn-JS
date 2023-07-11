// TITLE
// Multiplication, division, and comparison operators

// DESCRIPTION
// Write a function that takes two numbers (a and b) as arguments.
// If a is smaller than b, divide a by b. Otherwise, multiply both numbers.
// Return the resulting value

function myFunction(a, b){
    return a < b ? a / b : b * a;
}


// TEST CASES                         Expected
// myFunction(10, 100)                  0.1

// myFunction(90, 45)                  4050

// myFunction(8, 20)                    0.4

// myFunction(2, 0.5)                    1
