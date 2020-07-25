function unique (arr) {
	/**
	*  时间复杂度: O(nlogn) -> sort 快排
	*  空间复杂度: O(nlogn) -> sort
	*/

	// flat array
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] instanceof Array) {
			arr = arr.concat(arr[i]);
			arr.splice(i, 1);
		}
	}
	// two points
	arr.sort((a, b) => a - b);
	let start = 0,
		end = 1;

	while(end < arr.length) {
		if(arr[start] === arr[end]) {
			arr.splice(end, 1);
			continue;
		}
		start++;
		end++;
	}

	return arr;
}

unique([1, 2, 8, 3, [2, 8, 3, [1, 8, 2]], 3, 12, [1, 12, [1, 2, [3, 4, 7]]], 5]);
