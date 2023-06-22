function numberSquares(n) {
	if (n < 1) { return 0; }
	return n**2 + numberSquares(n-1);
}

function numberSquares(n) {
	return n > 1? n**2 + numberSquares(n-1) : 1;
}


// https://math.fandom.com/wiki/Square_pyramidal_number
function numberSquares(n) {
	return (n * (n+1) * ( (2*n) + 1) ) / 6;
}