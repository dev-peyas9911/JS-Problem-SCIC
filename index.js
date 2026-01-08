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
console.log(findMax([5, 1, 9, 3])); 