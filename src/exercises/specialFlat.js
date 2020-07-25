/**
 *  implement a special flat fn.
 *  the roles is as follows:
 * 
 *	flat({								{
 *		a: {b: {c: 1}},					'a.b.c': 1
 *		d: [1, [2, 3]],      ==> 		d: [1, 2, 3]
 *		e: 1							e: 1
 *	})								}
 *
 *	flat({										{
 *		a: {b: {c: [1, [2, 3, [4]]]}},			'a.b.c': [1, 2, 3]
 *		d: [1, [2, 3, [4]]],      		==> 	d: [1, 2, 3, 4]
 *		e: 1									e: 1
 *	})										}
 */

function flat(obj) {
	// deal array
	function dealArr(arr) {
	    return arr.reduce(function(prev, next){
	        return prev.concat(Array.isArray(next) ? dealArr(next) : next)
	    }, [])
	}
	// deal object
	function dealObj(obj) {
		for(let key in obj) {
			let val = obj[key];
			return [`.${key}`].concat((Object.prototype.toString.call(val) === '[object Object]' ? dealObj(val) : Array.isArray(val) ? [dealArr(val)] : val));
		}
	}
	// deal process 
	for(let key in obj) {
		let val = obj[key];

		if(Object.prototype.toString.call(val) === '[object Object]') { // deal object
			const dealed = dealObj(val);
			let value = dealed.pop();
			obj[key + dealed.join('')] = value
			delete obj[key];
		} else if(Array.isArray(val)) { // deal array
			obj[key] = dealArr(val);
		} else { // the others
			obj[key] = val;
		}
	}
	return obj;
}

/*
function createIterator(arr) {
	let count = 0;
	return {
		next() {
			let done = count >= arr.length,
				value = !done ? arr[count++] : undefined;
	
			return {
				value,
				done
			}
		}
	}

}
*/