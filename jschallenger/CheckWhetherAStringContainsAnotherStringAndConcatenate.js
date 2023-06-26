function MyFunction(a, b){
    return typeof b === 'string' ? a.includes(b) ? b + a : a.concat(' ', b) : 'b is not a string.';
}

console.log(MyFunction('cheese', 'cake'));
console.log(MyFunction('lips', 's'));
console.log(MyFunction('java', 'script'));
console.log(MyFunction(' think, therefore I am', 'I'));