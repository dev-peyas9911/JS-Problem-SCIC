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
