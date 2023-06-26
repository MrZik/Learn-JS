function MyFunction(a, n){
    return a[n - 1]; // to return using 1 as starting index
    //return a.charAt(n);
}

console.log(MyFunction('abcd',1));
console.log(MyFunction('zyxbwpl',5));
console.log(MyFunction('gfedcba',3));