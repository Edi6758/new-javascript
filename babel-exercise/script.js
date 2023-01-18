//1) criando um projeto npm
//npm init -y

//2) instalando os modulos do babel 
//npm install --save-dev @babel/core @babel/cli @babel/preset-env

//3) codigo js que vai ser sconvertido para uma versão mais simples de se ler
const average = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(`Média Simples: ${average(3, 6, 10, 9)}`)

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + (number * weight), 0)
    const weightSum = entries.reduce((accum, entry) => accum + entry.weight, 0)
    return sum / weightSum
}

console.log(`Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7, weight: 1 },
    { number: 10, weight: 1 },
)}`)

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return average(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

const mode = (...numbers) => {
    const quantities = numbers.map(number => [
        number,
        numbers.filter(n => number === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)

//4) executando o babel
//npx babel index.js

//5) salvando isso em um outro arquivo 
//npx babel index.js --out-file dist.js

//6) deixando compativel pro es5
//npx babel index.js --out-file dist.js --presets=@babel/preset-env

//7) usando o babel em pastas inteiras
//npx babel src --out-dir dist --presets=@babel/preset-env

//8) executando o babel de forma mais ágil no package
/**
 *   "main": "index.js",
    "scripts": {
        "babel": "babel src --out-dir dist --presets=@babel/preset-env"
    },
    "keywords": [],
 */

//9) rodando o babel
//npm run babel

