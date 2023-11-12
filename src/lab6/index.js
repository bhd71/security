const column = 6
const row = 5
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
const inputText = fs.readFileSync('../lab5/output', 'utf-8').match(/.{1,2}/g)


const decryptedText = decrypt(inputText).join('')
console.log(decryptedText)
fs.writeFileSync('./result',decryptedText, 'utf-8')


function decrypt(inputText) {
    return inputText.reduce((accum, couple) => {
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


function sameColumn(couple) {
    return couple.reduce((accum, letter) => {

        return accum + matrix.find(el => {
            let index = letter.j

            if (index - 1 === 0) {
                index = column
            } else {
                index = index--
            }

            return el.i === letter.i && el.j === index

        }).letter
    }, '')
}

function sameRow(couple) {
    return couple.reduce((accum, letter) => {
        return accum + matrix.find(el => {
            let index = letter.i

            if (index - 1 === 0) {
                index = row
            } else {
                index = index--
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
