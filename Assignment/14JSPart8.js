// 1. Solution

let nums = [1, 2, 3, 4, 5];

const square = nums.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur, 0);

let avg = sum / nums.length;
console.log(avg);



// 2. Solution

let numbers = [2, 4, 6, 8, -2, -4];
console.log(numbers.map((numbers) => numbers + 5));


// 3. Solution

let strings = ["adam", "bob", "catlyn", "donald", "eve"];
console.log(strings.map((strings) => strings.toUpperCase()));


// 4. Solution

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v) => v * 2),
];

doubleAndReturnArgs([1, 2, 3], 4, 4);
doubleAndReturnArgs([2], 10, 4);



// 5. Solution

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects(
    { a: 1, b: 2 },
    { c: 3, d: 4 });     