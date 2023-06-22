function addUp(num) {
	let total = 0;
	for(let i = 0; i <= num; ++i){
		total += i;
	}
	return total;
}

function addUp(num){
    return (num * (num + 1)) / 2;
}