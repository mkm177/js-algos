// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution # 3 using memoization. The memoize function below can work with many memoization scenarios. Watch video # 55, 56 of course for more details.
function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };

}

function slowfib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowfib);

module.exports = fib;

//Solution 1 mkm Iterative
// function fib(n) {
//     let a = 0;
//     let b = 1;
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         for (let i = 0; i < n; i++) {
//             let temp = a + b;
//             a = b;
//             b = temp;
//         }
//         return a;
//     }
// }

// Solution # 2 Recursive
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2);
// }