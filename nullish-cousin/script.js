let a = 0 //false

let b = a || 42

console.log({ a, b })

b = a ?? 42

console.log({a, b})

let c = false ?? 42

console.log({ c })

//verifica se o valor é nulo ou undefined, se for, ele pula e passa pro próximo...