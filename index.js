// Problem 1 Solution:
function reverseString(str) {
    return str.split("").reverse().join("");
}
// console.log(reverseString("hello"));


// Problem 2 Solution:
function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
// console.log(countVowels("programming"));


// Problem 3 Solution:
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));


// Problem 4 Solution:
function findMax(arr) {
    return Math.max(...arr);
}
// console.log(findMax([5, 1, 9, 3]));


// Problem 5 Solution:
function removeDuplicates(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


// Problem 6 Solution:
function sumArray(arr) {
    let sum = 0;

    for (const num of arr) {
        sum += num;
    }
    return sum;
}
// console.log(sumArray([1, 2, 3, 4]));


// Problem 7 Solution:
function findEvenNumbers(arr) {
    const evens = [];

    for (const num of arr) {
        if (num % 2 === 0) {
            evens.push(num);
        }
    }
    return evens;
}
// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));