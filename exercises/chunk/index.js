// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let c = 0;
    let d = 0;
    let newArr = [];
    let chunkArr = [];
    for (let i = 0; i < array.length; i++) {
        chunkArr[c] = array[i];
        c++;
        if (c === size) {
            c = 0;
            newArr[d] = chunkArr;
            // console.log(newArr);
            chunkArr = [];
            d++;
        }
    }
    if (c < size && c != 0) {
        // console.log(chunkArr);
        newArr[d++] = chunkArr;
    }

    // console.log(newArr);
    return newArr;
}

module.exports = chunk;