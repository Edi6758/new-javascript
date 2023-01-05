function sum(...numbers) {
    return numbers.reduce((accum, num)=> accum + num, 0)
}

console.log(sum(3, 4))
console.log(sum(3, 4, 53, 5))
console.log(sum(3,4,53,5,55,44,2))