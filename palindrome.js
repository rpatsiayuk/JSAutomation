function checkStringIsPalindrome(text) {
    if (typeof text !== 'string' || !text) {
        console.log("Parameter is invalid = " + text)
        return false
    } else {
        // Split text into array of characters
        let charArray = text.toUpperCase().split('');
        //reverse array 
        let result = charArray.reverse().join('')
        return text.toUpperCase() === result
    }
}

console.log(checkStringIsPalindrome('Anna'))
console.log(checkStringIsPalindrome('Roman'))
console.log(checkStringIsPalindrome('1221'))
console.log(checkStringIsPalindrome('55556'))
console.log(checkStringIsPalindrome(null))
console.log(checkStringIsPalindrome(525))
console.log(checkStringIsPalindrome(''))