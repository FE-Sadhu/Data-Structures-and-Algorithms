/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  let len = digits.length - 1;
  while(len >= 0) {
        digits[len]++;
        if (digits[len] >= 10) {
           digits[len] = 0;
        } else {
           return digits;
        }
     len--;
  }
  digits.unshift(1)
  return digits;
};