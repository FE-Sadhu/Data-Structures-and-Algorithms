/**
 * @param {number} N
 * @return {number}
 */
// var fib = function(N) {
//     if (N === 0) return 0;
//     if (N === 1) return 1;
    
//     return fib(N - 1) + fib(N - 2);
// };

// var fib = function(N) {
//     const cache = {
//         '0': 0,
//         '1': 1
//     };
//     function helper(N) {
//         if (N in cache) return cache[N];
//         const res = helper(N - 1) + helper(N - 2);
//         cache[N] = res;
//         return res;
//     }
    
//     return helper(N);
// }
// var fib = function(N) {
//     let arr = [];
//     arr[0] = 0;
//     arr[1] = 1;
//     for(let i = 2;i<=N;i++){
//         arr[i] = arr[i-1]+arr[i-2];
//     }    
//     return arr[N];
// }
var fib = function(N) {
  if (N < 2) return N;
  var queue = [0, 1];
  for (var i = 2; i <= N; i++)
      queue.push(queue.shift() + queue[0]);
  return queue[1];
};