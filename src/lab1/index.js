const fs = require('fs');


const N = 12


let ukrainianAndEnglishCharacters = [
    {value: 'А', index: 0},
    {value: 'Б', index: 1},
    {value: 'В', index: 2},
    {value: 'Г', index: 3},
    {value: 'Д', index: 4},
    {value: 'Е', index: 5},
    {value: 'Є', index: 6},
    {value: 'Ж', index: 7},
    {value: 'З', index: 8},
    {value: 'И', index: 9},
    {value: 'І', index: 10},
    {value: 'Ї', index: 11},
    {value: 'Й', index: 12},
    {value: 'К', index: 13},
    {value: 'Л', index: 14},
    {value: 'М', index: 15},
    {value: 'Н', index: 16},
    {value: 'О', index: 17},
    {value: 'П', index: 18},
    {value: 'Р', index: 19},
    {value: 'С', index: 20},
    {value: 'Т', index: 21},
    {value: 'У', index: 22},
    {value: 'Ф', index: 23},
    {value: 'Х', index: 24},
    {value: 'Ц', index: 25},
    {value: 'Ч', index: 26},
    {value: 'Ш', index: 27},
    {value: 'Щ', index: 28},
    {value: 'Ь', index: 29},
    {value: 'Ю', index: 30},
    {value: 'Я', index: 31},
    {value: 'а', index: 32},
    {value: 'б', index: 33},
    {value: 'в', index: 34},
    {value: 'г', index: 35},
    {value: 'д', index: 36},
    {value: 'е', index: 37},
    {value: 'є', index: 38},
    {value: 'ж', index: 39},
    {value: 'з', index: 40},
    {value: 'и', index: 41},
    {value: 'і', index: 42},
    {value: 'ї', index: 43},
    {value: 'й', index: 44},
    {value: 'к', index: 45},
    {value: 'л', index: 46},
    {value: 'м', index: 47},
    {value: 'н', index: 48},
    {value: 'о', index: 49},
    {value: 'п', index: 50},
    {value: 'р', index: 51},
    {value: 'с', index: 52},
    {value: 'т', index: 53},
    {value: 'у', index: 54},
    {value: 'ф', index: 55},
    {value: 'х', index: 56},
    {value: 'ц', index: 57},
    {value: 'ч', index: 58},
    {value: 'ш', index: 59},
    {value: 'щ', index: 60},
    {value: 'ь', index: 61},
    {value: 'ю', index: 62},
    {value: 'я', index: 63},
    {value: 'A', index: 64},
    {value: 'B', index: 65},
    {value: 'C', index: 66},
    {value: 'D', index: 67},
    {value: 'E', index: 68},
    {value: 'F', index: 69},
    {value: 'G', index: 70},
    {value: 'H', index: 71},
    {value: 'I', index: 72},
    {value: 'J', index: 73},
    {value: 'K', index: 74},
    {value: 'L', index: 75},
    {value: 'M', index: 76},
    {value: 'N', index: 77},
    {value: 'O', index: 78},
    {value: 'P', index: 79},
    {value: 'Q', index: 80},
    {value: 'R', index: 81},
    {value: 'S', index: 82},
    {value: 'T', index: 83},
    {value: 'U', index: 84},
    {value: 'V', index: 85},
    {value: 'W', index: 86},
    {value: 'X', index: 87},
    {value: 'Y', index: 88},
    {value: 'Z', index: 89},
    {value: 'a', index: 90},
    {value: 'b', index: 91},
    {value: 'c', index: 92},
    {value: 'd', index: 93},
    {value: 'e', index: 94},
    {value: 'f', index: 95},
    {value: 'g', index: 96},
    {value: 'h', index: 97},
    {value: 'i', index: 98},
    {value: 'j', index: 99},
    {value: 'k', index: 100},
    {value: 'l', index: 101},
    {value: 'm', index: 102},
    {value: 'n', index: 103},
    {value: 'o', index: 104},
    {value: 'p', index: 105},
    {value: 'q', index: 106},
    {value: 'r', index: 107},
    {value: 's', index: 108},
    {value: 't', index: 109},
    {value: 'u', index: 110},
    {value: 'v', index: 111},
    {value: 'w', index: 112},
    {value: 'x', index: 113},
    {value: 'y', index: 114},
    {value: 'z', index: 115},
    {value: '!', index: 116},
    {value: '"', index: 117},
    {value: '#', index: 118},
    {value: '$', index: 119},
    {value: '%', index: 120},
    {value: '&', index: 121},
    {value: "'", index: 122},
    {value: '(', index: 123},
    {value: ')', index: 124},
    {value: '*', index: 125},
    {value: '+', index: 126},
    {value: ',', index: 127},
    {value: '-', index: 128},
    {value: '.', index: 129},
    {value: '/', index: 130},
    {value: ':', index: 131},
    {value: ';', index: 132},
    {value: '<', index: 133},
    {value: '=', index: 134},
    {value: '>', index: 135},
    {value: '?', index: 136},
    {value: '@', index: 137},
    {value: '[', index: 138},
    {value: '\\', index: 139},
    {value: ']', index: 140},
    {value: '^', index: 141},
    {value: '_', index: 142},
    {value: '`', index: 143},
    {value: '{', index: 144},
    {value: '|', index: 145},
    {value: '}', index: 146},
    {value: '~', index: 147},
    {value: '0', index: 148},
    {value: '1', index: 149},
    {value: '2', index: 150},
    {value: '3', index: 151},
    {value: '4', index: 152},
    {value: '5', index: 153},
    {value: '6', index: 154},
    {value: '7', index: 155},
    {value: '8', index: 156},
    {value: '9', index: 157}
];

const arrayLength = ukrainianAndEnglishCharacters.length

const inputText = fs.readFileSync('./input', 'utf8');

const encryptedText = fs.readFileSync('./encrypted', 'utf-8')

fs.writeFileSync('./encrypted', encrypt(inputText))


console.log(inputText)

console.log(encrypt(inputText))


console.log(decrypt(encryptedText))




function encrypt(inputText) {
    inputText = inputText.split('')


    const outputText = inputText.map(el => {
        if (el === ' ') return el


        let index = ukrainianAndEnglishCharacters.find(chapter => {
            return chapter.value === el
        })?.index

        index = index + N > arrayLength ? index + N - arrayLength : index + N

        return ukrainianAndEnglishCharacters.find(chapter => {
            return chapter.index === index
        })?.value
    })


    return outputText.join('')
}

function decrypt(inputText) {
    inputText = inputText.split('')


    const outputText = inputText.map(el => {
        if (el === ' ') return el


        let index = ukrainianAndEnglishCharacters.find(chapter => {
            return chapter.value === el
        })?.index

        index = index - N < 0 ? arrayLength - Math.abs(index - N) : index - N

        return ukrainianAndEnglishCharacters.find(chapter => {
            return chapter.index === index
        })?.value
    })


    return outputText.join('')
}

