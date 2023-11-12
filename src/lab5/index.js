const alphabet = [
    {letter: 'в', index: 4},
    {letter: 'ґ', index: 28},
    {letter: 'є', index: 11},
    {letter: 'г', index: 6},
    {letter: 'б', index: 1},
    {letter: 'д', index: 24},
    {letter: 'а', index: 23},
    {letter: 'ї', index: 5},
    {letter: 'з', index: 2},
    {letter: 'е', index: 31},
    {letter: 'и', index: 30},
    {letter: 'ж', index: 32},
    {letter: 'і', index: 29},
    {letter: 'к', index: 33},
    {letter: 'л', index: 7},
    {letter: 'н', index: 26},
    {letter: 'м', index: 27},
    {letter: 'й', index: 13},
    {letter: 'о', index: 21},
    {letter: 'п', index: 15},
    {letter: 'р', index: 8},
    {letter: 'с', index: 16},
    {letter: 'т', index: 19},
    {letter: 'у', index: 20},
    {letter: 'ц', index: 12},
    {letter: 'х', index: 18},
    {letter: 'ю', index: 9},
    {letter: 'щ', index: 14},
    {letter: 'ч', index: 3},
    {letter: 'ф', index: 25},
    {letter: 'ь', index: 10},
    {letter: 'я', index: 17},
    {letter: 'ш', index: 22}
]
const column = 6
const row = 5
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
    {letter: 'ш', i: 1, j: 1},
    {letter: 'я', i: 1, j: 2},
    {letter: 'ь', i: 1, j: 3},
    {letter: 'ф', i: 1, j: 4},
    {letter: 'ч', i: 1, j: 5},
    {letter: 'щ', i: 1, j: 6},
    {letter: 'ю', i: 2, j: 1},
    {letter: 'х', i: 2, j: 2},
    {letter: 'ц', i: 2, j: 3},
    {letter: 'у', i: 2, j: 4},
    {letter: 'т', i: 2, j: 5},
    {letter: 'с', i: 2, j: 6},
    {letter: 'р', i: 3, j: 1},
    {letter: 'п', i: 3, j: 2},
    {letter: 'о', i: 3, j: 3},
    {letter: 'й', i: 3, j: 4},
    {letter: 'м', i: 3, j: 5},
    {letter: 'н', i: 3, j: 6},
    {letter: 'л', i: 4, j: 1},
    {letter: 'к', i: 4, j: 2},
    {letter: 'і', i: 4, j: 3},
    {letter: 'ж', i: 4, j: 4},
    {letter: 'и', i: 4, j: 5},
    {letter: 'е', i: 4, j: 6},
    {letter: 'з', i: 5, j: 1},
    {letter: 'ї', i: 5, j: 2},
    {letter: 'а', i: 5, j: 3},
    {letter: 'д', i: 5, j: 4},
    {letter: 'б', i: 5, j: 5},
    {letter: 'г', i: 5, j: 6}
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


// for (let i = 1; i <= column; i++) {
//     for (let j = 1; j <= row; j++) {
//         console.log(matrix.find(el => el.i === i && el.j === j).letter)
//     }
// }


function findMatrixElementsByCouple(couple) {
    const fistLetter = matrix.find(el => el.letter === couple[0])
    const secondLetter = matrix.find(el => el.letter === couple[1])

    return [fistLetter, secondLetter]
}


function addToAccum(accum, nextEl) {
    return [...accum, nextEl]
}












