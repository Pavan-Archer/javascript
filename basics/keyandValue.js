// Creating an object from the pairs of key and value

// ArrData([
//     ['a',1],
//     ['b',2],
//     ['c',3],
//     ['d',4],
//     ['e',5],
// ])

const ArrData = (arr) => {
return Object.fromEntries(arr)
}

console.log(ArrData([
    ['a',1],
    ['b',2],
    ['c',3],
    ['d',4],
    ['e',5],
]))