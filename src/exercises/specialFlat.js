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
 *
 * {
 * 	a: {
 * 		b: 1,
 * 		c: {
 * 			d: [1, 2, [3, { e: {g : 2}}]],
 * 			f: 'f'
 * 			}
 * 		}
 * }
 * ===>
 * 
 * {
 * a.b: 1,
 * a.c.d: [1, 2, 3, {e.g: 2}],
 * a.c.f: 'f'
 * }
 * 
 */

function flat(obj) {

	function isArray(arr) {
		return Array.isArray(arr);
	}

	function isObject(obj) {
		return Object.prototype.toString.call(obj) === '[object Object]';
	}

	function flattenArr(arr) {
		return arr.reduce((prev, next) => {
			return prev.concat(Array.isArray(next) ? flattenArr(next) : isObject(next) ? flattenObj(next) : next);
		}, [])
	}

	function flattenObj(obj, key = '', res = {}) {
		for (let [k, v] of Object.entries(obj)) {
			if (isObject(v)) {
				let tmp = key + k + '.'
				flattenObj(v, tmp, res); // 这个递归仅传递 res 和 key
			} else {
				let tmp = key + k;
				res[tmp] = isArray(v) ? flattenArr(v) : v;
			}
		}
		return res;
	}

	return flattenObj(obj);
}

let res = flat({
	a: {
		b: 1,
		c: {
			d: [1, 2, [3, {
				e: {
					g: 2
				}
			}]],
			f: 'f'
		}
	},
	b: [1, 2, [3]],
	e: 1
})
console.log(res); 
/*
{
	'a.b': 1,
	'a.c.d': [1, 2, 3, {
		'e.g': 2
	}],
	'a.c.f': 'f',
	b: [1, 2, 3],
	e: 1
}
*/
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