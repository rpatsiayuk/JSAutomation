function updateSence(text, numberOfChar, charForReplace) {
    let result
    if (typeof text === 'string' && typeof numberOfChar === 'number' && typeof charForReplace === 'string') {
        let wordsArray = text.split(' ')
        for (var i = 0; i < wordsArray.length; i++) {
            let chars = wordsArray[i].charAt(numberOfChar)
            wordsArray[i] = wordsArray[i].replace(chars, charForReplace)
            result = wordsArray.join(' ')
        }
    } else {
        console.log("Invalid parameters. Please try again")
    }
    console.log('=======================')
    console.log(text)
    console.log(result);
    console.log('=======================')
}

updateSence("When love kills love", 2, "Hello")
updateSence(55, 2, "Hello")
//updateSence("I am Software", 2, "Hello")