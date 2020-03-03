// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (2 * n - 1 === level.length) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midPoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}

module.exports = pyramid;

//solution mkm DOES NOT WORK Memory issue
// function pyramid(n) {
//     let col = 1;
//     let stair = '';
//     let width = (2 * n) - 1;
//     let midpoint = Math.ceil(width / 2);
//     console.log("width" + width);
//     for (let row = 1; row <= n; row++) {
//         while (col <= width) {
//             if (col >= (midpoint - row - 1) || col <= midpoint + row - 1 || col === midpoint) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//         stair = '';
//         col = 1;
//     }
// }

// Solution # 1
// function pyramid(n) {
//     const midPoint = Math.floor((2 * n - 1) / 2);

//     for (let row = 0; row < n; row++) {
//         let level = '';

//         for (let col = 0; col < 2 * n - 1; col++) {
//             if (midPoint - row <= col && midPoint + row >= col) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// }