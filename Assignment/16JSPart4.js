// // 1. Solution

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//         arr.splice(i, 1);
//     }
// }

// console.log(arr);




// // 2. Solution

// let number = 287152;
// let count = 0;

// while (number > 0) {
//     number = Math.floor(number / 10);
//     count++;
// }

// console.log(`Total count is ${count}`);





// // 3. Solution

// let number = 287152;
// let sum = 0;
// while (number > 0) {
//     sum += number % 10;
//     number = Math.floor(number / 10);
// }
// console.log(`Sum of digits in a number is ${sum}`);




// 4. Solution

let fact = prompt("Please enter the value of number");
let ans = 1;
while (fact > 1) {
    ans *= fact;
    fact--;
}

if (fact == 0) {
    ans = 1;
}
console.log(`Factorial of given number is ${ans}`);





// 5. Solution

// let arr = [23, 11, 1, 0, 7, 55];
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }

// console.log(`The largest number in an array with only positive numbers is ${largest}`);