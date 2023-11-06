
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

const inputText = fs.readFileSync('../lab2/output', 'utf-8')

const separateLetters = inputText.match(/.{1,2}/g)
// console.log(separateLetters)
const popularity = separateLetters.reduce((acc, el) => {

    if (acc && Object.keys(acc).includes(el)) {
        return {
            ...acc,
            [el]: acc[el]+1
        }
    }
     return {
        ...acc,
         [el]: 1
     }
} , {})

const popularityTable = Object.entries(popularity).map(el=>{
    const popularityInPercent = el[1]/separateLetters.length*100
    return [el[0], popularityInPercent.toFixed(2)]
})

console.log(popularityTable)

const decryptedLetters= decrypt(separateLetters)


writeToFile(decryptedLetters)


function decrypt(letters) {
    return  letters.reduce((accum,el) => {
       return [...accum,( finalTable.reduce((accum,value) =>{
            if (value.numbers.includes(Number(el))){
                return  [...accum,value.letter]
            }
            return  accum
        }, []))]
    }, [])
}


function writeToFile(decryptedLetters) {
    fs.writeFileSync('./output', '', 'utf8');

    decryptedLetters.forEach(letters => {
        fs.appendFileSync('./output', letters.join(' ') + '\n'); // Add a newline for separation
    });
}
