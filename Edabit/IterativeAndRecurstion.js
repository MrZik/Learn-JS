function inclusiveArrayParam(startVal, endVal) {
    const arr = []
    for(let i = startVal; i <= endVal; i++) {
        arr.push(i)
    }
    return arr
}

console.log('iterative inclusive array solution: ', inclusiveArrayParam(2, 6));

function inclusiveArrayParam(startVal, endVal) {
    if(startVal > endVal){
        return [startVal];
    } else{
        const arr = inclusiveArrayParam(startVal,endVal - 1);
        arr.push(endVal);
        return arr;
    }
}

console.log('recursive inclusive array solution: ', inclusiveArrayParamRecursive(2, 6))