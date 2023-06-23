function sevenBoom(arr) {
	return JSON.stringify(arr).includes(7) ? "Boom!" : "there is no 7 in the array";
}