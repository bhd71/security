const alphabet = [
    { letter: 'а', index: 23 },
    { letter: 'б', index: 1 },
    { letter: 'в', index: 4 },
    { letter: 'г', index: 6 },
    { letter: 'ґ', index: 28 },
    { letter: 'д', index: 24 },
    { letter: 'е', index: 31 },
    { letter: 'є', index: 11 },
    { letter: 'ж', index: 32 },
    { letter: 'з', index: 2 },
    { letter: 'и', index: 30 },
    { letter: 'і', index: 29 },
    { letter: 'ї', index: 5 },
    { letter: 'й', index: 13 },
    { letter: 'к', index: 33 },
    { letter: 'л', index: 7 },
    { letter: 'м', index: 27 },
    { letter: 'н', index: 26 },
    { letter: 'о', index: 21 },
    { letter: 'п', index: 15 },
    { letter: 'р', index: 8 },
    { letter: 'с', index: 16 },
    { letter: 'т', index: 19 },
    { letter: 'у', index: 20 },
    { letter: 'ф', index: 25 },
    { letter: 'х', index: 18 },
    { letter: 'ц', index: 12 },
    { letter: 'ч', index: 3 },
    { letter: 'ш', index: 22 },
    { letter: 'щ', index: 14 },
    { letter: 'ь', index: 10 },
    { letter: 'ю', index: 9 },
    { letter: 'я', index: 17 }
]



const mySentence = 'прикладнаматематика'
const mySentenceArr = Array.from(mySentence)
const testvalue = 'ЛьвівськаПолітехнікаТаІнститутПрикладноїМатематики'

function encrypt(text) {
    const textArr = Array.from(text)

    const res = []

    for (let i = 0; i < textArr.length; i++) {

        const iForMySentence = getIForMySentence(i)

        const indexOfInputLetter = getIndexFromAlphabet(textArr[i])
        const indexOfLetterFromMySentence = getIndexFromAlphabet(mySentenceArr[iForMySentence])

        const resultIndex = getResultIndexForEncrypt(indexOfInputLetter, indexOfLetterFromMySentence)
        res.push(getLetterFromAlphabet(resultIndex))
    }

    return res.join('')
}

function decrypt(inputText) {
    const textArr = Array.from(inputText)

    const res = []

    for (let i = 0; i < textArr.length; i++) {

        const iForMySentence = getIForMySentence(i)

        const indexOfInputLetter = getIndexFromAlphabet(textArr[i])
        const indexOfLetterFromMySentence = getIndexFromAlphabet(mySentenceArr[iForMySentence])

        const resultIndex = getResultIndexForDecrypt(indexOfInputLetter, indexOfLetterFromMySentence)

        res.push(getLetterFromAlphabet(resultIndex))
    }

    return res.join('')
}


const encryptedText = encrypt(testvalue)
console.log('Оригінальний текст: ' + testvalue)
console.log('Зашифрований текст: ' + encryptedText)
console.log('Дешифрований текст: ' + decrypt(encryptedText))

function getIndexFromAlphabet(letter) {
        return alphabet.find(el=> el.letter.toLowerCase() === letter.toLowerCase()).index
}

function getLetterFromAlphabet(index) {
    return alphabet.find(el => el.index === index).letter
}


function getResultIndexForEncrypt(firstIndex, secondIndex, ) {
        const summary = firstIndex + secondIndex

        return  summary > alphabet.length ? summary - alphabet.length : summary
}
function getResultIndexForDecrypt(firstIndex, secondIndex, ) {
        const summary = firstIndex - secondIndex

        return  summary > 0 ? summary : alphabet.length - Math.abs(summary)
}

function getIForMySentence(i) {
    const rest =  Math.floor(i/mySentenceArr.length)

    return i - mySentenceArr.length * rest
}
