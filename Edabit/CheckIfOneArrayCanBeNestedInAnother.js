function canNest(arr1, arr2) {
	// arr1 min > arr2 min
	// arr1 max < arr2 max
	//let canAdd = true;
	
	//if(Math.min(...arr1) > Math.min(...arr2) &&
	//	Math.max(...arr1 < Math.max(...arr2))){
	//	canAdd = true;
	//} else{
	//	canAdd = false;
	//}
	
	return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
}