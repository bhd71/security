const column = 11
const row = 3
console.logMatrix = (matrix) => {

    for (let i = 1; i <= row; i++) {
        // Create an array to store the letters in the current row
        const currentRow = [];

        for (let j = 1; j <= column; j++) {
            // Find the element with matching i and j
            const element = matrix.find(el => el.i === i && el.j === j);

            // If an element is found, push its letter to the current row; otherwise, push a placeholder
            currentRow.push(element ? element.letter : ' ');
        }

        // Log the current row as a string
        console.log(currentRow.join(' '));
    }
}
let matrix = [
    { letter: 'ш', i: 1, j: 1 },
    { letter: 'я', i: 1, j: 2 },
    { letter: 'ь', i: 1, j: 3 },
    { letter: 'ф', i: 1, j: 4 },
    { letter: 'ч', i: 1, j: 5 },
    { letter: 'щ', i: 1, j: 6 },
    { letter: 'ю', i: 1, j: 7 },
    { letter: 'х', i: 1, j: 8 },
    { letter: 'ц', i: 1, j: 9 },
    { letter: 'у', i: 1, j: 10 },
    { letter: 'т', i: 1, j: 11 },
    { letter: 'с', i: 2, j: 1 },
    { letter: 'р', i: 2, j: 2 },
    { letter: 'п', i: 2, j: 3 },
    { letter: 'о', i: 2, j: 4 },
    { letter: 'й', i: 2, j: 5 },
    { letter: 'м', i: 2, j: 6 },
    { letter: 'н', i: 2, j: 7 },
    { letter: 'л', i: 2, j: 8 },
    { letter: 'к', i: 2, j: 9 },
    { letter: 'і', i: 2, j: 10 },
    { letter: 'ж', i: 2, j: 11 },
    { letter: 'и', i: 3, j: 1 },
    { letter: 'е', i: 3, j: 2 },
    { letter: 'з', i: 3, j: 3 },
    { letter: 'ї', i: 3, j: 4 },
    { letter: 'а', i: 3, j: 5 },
    { letter: 'д', i: 3, j: 6 },
    { letter: 'б', i: 3, j: 7 },
    { letter: 'г', i: 3, j: 8 },
    { letter: 'є', i: 3, j: 9 },
    { letter: 'ґ', i: 3, j: 10 },
    { letter: 'в', i: 3, j: 11 }
]

const fs = require('fs')

const testText = fs.readFileSync('./input', 'utf-8')

const separateLetters = testText.match(/.{1,2}/g)

console.log(separateLetters)

const encryptedText = encrypt(separateLetters)

console.log(encryptedText)
fs.writeFileSync('./output', encryptedText.join(''), 'utf-8')


function encrypt(inputArr) {
    return inputArr.reduce((accum, couple) => {
        const [firstEl, secondEl] = findMatrixElementsByCouple(couple)

        if (firstEl.i === secondEl.i) {
            return addToAccum(accum, sameColumn([firstEl, secondEl]))
        }
        if (firstEl.j === secondEl.j) {
            return addToAccum(accum, sameRow([firstEl, secondEl]))
        }

        return addToAccum(accum, defaultCase(firstEl, secondEl))
    }, [])
}


console.logMatrix(matrix)


function sameColumn(couple) {
    return couple.reduce((accum, letter) => {

        return accum + matrix.find(el => {
            let index = letter.j

            if (index + 1 > column) {
                index = 1
            } else {
                index = index++
            }

            return el.i === letter.i && el.j === index

        }).letter
    }, '')
}

function sameRow(couple) {
    return couple.reduce((accum, letter) => {
        return accum + matrix.find(el => {
            let index = letter.i

            if (index + 1 > row) {
                index = 1
            } else {
                index = index++
            }
            return el.i === index && el.j === letter.j

        }).letter
    }, '')
}

function defaultCase(firstEl, secondEl) {
    const firstResEl = matrix.find(el => el.j === firstEl.j && el.i === secondEl.i).letter
    const secondResEl = matrix.find(el => el.i === firstEl.i && el.j === secondEl.j).letter

    return firstResEl + secondResEl
}

function findMatrixElementsByCouple(couple) {
    const fistLetter = matrix.find(el => el.letter === couple[0])
    const secondLetter = matrix.find(el => el.letter === couple[1])

    return [fistLetter, secondLetter]
}


function addToAccum(accum, nextEl) {
    return [...accum, nextEl]
}












