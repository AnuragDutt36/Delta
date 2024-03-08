// // 1. Solution

// let arr = [34, 21, 12, 34, 23];
// let number = 24;

// let ans = (arr, num) => {
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {

//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// console.log(`Answer is : ${ans(arr, number)}`);



// 2. Solution

// let str = "abcdabcdefgggh";
// let ans = "";

// function uniqueCharacter(str, ans) {
//     for (let i = 0; i < str.length; i++) {
//         if (ans.indexOf(str[i]) == -1) {
//             ans += str[i];
//         }
//     }
//     return ans;
// }
// console.log(uniqueCharacter(str, ans));



// 3. Solution

// let country = ["Australia", "Germany", "United States of America"];
// function findLongestCountryName(country) {
//     let ans = 0;
//     let largest = country[0].length;
//     for (let i = 1; i < country.length; i++) {
//         if (country[i].length > largest) {
//             largest = country[i].length;
//             ans = i;
//         }
//     }
//     return country[ans];
// }

// console.log(`Longest country name is : ${findLongestCountryName(country)}`);



// 4. Solution

// let str = "apnacollege";

// function numberOfVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (
//             str.charAt(i) == "a" ||
//             str.charAt(i) == "e" ||
//             str.charAt(i) == "i" ||
//             str.charAt(i) == "o" ||
//             str.charAt(i) == "u"
//         ) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(`Number of vowels are ${numberOfVowels(str)}`);



// 5. Solution

let start = 100;
let end = 200;

function generateNumber(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(generateNumber(start, end));