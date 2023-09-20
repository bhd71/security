calculateRandomNumber = () => Number(((Math.random() * 10).toFixed(0)) + (Math.random() * 10).toFixed(0))
const preTable = [{letter: 'А', popularity: 3},
    {letter: 'Б', popularity: 1},
    {letter: 'В', popularity: 2},
    {letter: 'Г', popularity: 1},
    {letter: 'Ґ', popularity: 1},
    {letter: 'Д', popularity: 2},
    {letter: 'Е', popularity: 3},
    {letter: 'Є', popularity: 1},
    {letter: 'Ж', popularity: 1},
    {letter: 'З', popularity: 2},
    {letter: 'И', popularity: 3},
    {letter: 'І', popularity: 3},
    {letter: 'Ї', popularity: 1},
    {letter: 'Й', popularity: 1},
    {letter: 'К', popularity: 2},
    {letter: 'Л', popularity: 2},
    {letter: 'М', popularity: 2},
    {letter: 'Н', popularity: 4},
    {letter: 'О', popularity: 5},
    {letter: 'П', popularity: 2},
    {letter: 'Р', popularity: 3},
    {letter: 'С', popularity: 2},
    {letter: 'Т', popularity: 3},
    {letter: 'У', popularity: 2},
    {letter: 'Ф', popularity: 1},
    {letter: 'Х', popularity: 1},
    {letter: 'Ц', popularity: 1},
    {letter: 'Ч', popularity: 1},
    {letter: 'Ш', popularity: 1},
    {letter: 'Щ', popularity: 1},
    {letter: 'Ь', popularity: 1},
    {letter: 'Ю', popularity: 1},
    {letter: 'Я', popularity: 1},
    {letter: ' ', popularity: 7}
]

// const table = preTable.reduce((acc, {letter, popularity})=>{
//     return [
//         ...acc,
//         {
//             letter: letter,
//             numbers: getArrayOfNumbers(popularity)
//         }
//     ]
// },[])
//
// function getArrayOfNumbers(popularity) {
//
//     return Array.from({length: popularity}).reduce((accum, _) => {
//         let randomNumber = calculateRandomNumber()
//         do {
//             randomNumber = calculateRandomNumber()
//         }
//         while (randomNumber >= 100 || randomNumber < 10 || accum.includes(randomNumber))
//
//
//
//
//         return [...accum, randomNumber]
//     }, [])
//
// }
const finalTable = [
    {letter: 'А', numbers: [62, 33, 68]},
    {letter: 'Б', numbers: [88]},
    {letter: 'В', numbers: [15, 29]},
    {letter: 'Г', numbers: [17]},
    {letter: 'Ґ', numbers: [88]},
    {letter: 'Д', numbers: [34, 77]},
    {letter: 'Е', numbers: [41, 76, 85]},
    {letter: 'Є', numbers: [17]},
    {letter: 'Ж', numbers: [82]},
    {letter: 'З', numbers: [18, 27]},
    {letter: 'И', numbers: [37, 81, 95]},
    {letter: 'І', numbers: [91, 21, 10]},
    {letter: 'Ї', numbers: [63]},
    {letter: 'Й', numbers: [51]},
    {letter: 'К', numbers: [44, 14]},
    {letter: 'Л', numbers: [57, 82]},
    {letter: 'М', numbers: [96, 71]},
    {letter: 'Н', numbers: [10, 74, 95, 94]},
    {letter: 'О', numbers: [47, 68, 99, 11, 93]},
    {letter: 'П', numbers: [53, 73]},
    {letter: 'Р', numbers: [51, 53, 45]},
    {letter: 'С', numbers: [64, 93]},
    {letter: 'Т', numbers: [33, 70, 84]},
    {letter: 'У', numbers: [40, 22]},
    {letter: 'Ф', numbers: [28]},
    {letter: 'Х', numbers: [60]},
    {letter: 'Ц', numbers: [71]},
    {letter: 'Ч', numbers: [12]},
    {letter: 'Ш', numbers: [12]},
    {letter: 'Щ', numbers: [15]},
    {letter: 'Ь', numbers: [42]},
    {letter: 'Ю', numbers: [29]},
    {letter: 'Я', numbers: [22]},
    {letter: ' ', numbers: [84, 88, 36, 22, 41, 64, 82]}
]

const fs = require('fs')

const input = fs.readFileSync('./input', 'utf-8').split('')

fs.writeFileSync('./output',encrypt(input))

function encrypt(arr) {
    return arr.reduce((accum, el) => {
        const letter = finalTable.find(letter => letter.letter === el.toUpperCase())
        if (letter.numbers.length === 1) return accum += letter.numbers[0]
        const randomValueOfArray = getRandomIndexOfArrayDependOnLength(letter.numbers.length)
        return accum += letter.numbers[randomValueOfArray]
    }, '')


}


function getRandomIndexOfArrayDependOnLength(length) {
    let randomValue = Number((Math.random() * 10).toFixed(0))
    do {
        randomValue = Number((Math.random() * 10).toFixed(0))
    }
    while (randomValue > length)

    return randomValue === 0 ?  randomValue : randomValue - 1

}

