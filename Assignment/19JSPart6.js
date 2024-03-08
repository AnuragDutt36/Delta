// // 1. Solution

// let arr = [8, 5, 3, 5, 12, 9, 6, 1.2];
// let num = 5;

// function getElements(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }

// getElements(arr, num);


// 2. Solution

// let str = "abcdabcdefgggh";
// let ans = "";
// function unique(str, ans) {
//     for (let i = 0; i < str.length; i++) {
//         let curr = str[i];
//         if (ans.indexOf(curr) == -1) {
//             ans += curr;
//         }
//     }
//     return ans;
// }

// console.log(unique(str, ans));




// 3. Solution


// let arr = ["Australia", "United States of America", "Germany"];
// let larg = arr[0].length;
// let idx = 0;
// function checkLargestString(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length > larg) {
//             larg = arr[i].length;
//             idx = i;
//         }
//     }
//     return arr[idx];
// }

// console.log(checkLargestString(arr));



// 4. Solution

// let str = "apnacollege";
// let count = 0;
// function countVowels(str) {
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
// console.log(countVowels(str));





// 5. Solution

function generatingRandomNumbers(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}



