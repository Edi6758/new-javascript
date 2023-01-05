//um operador que permite espalhar os elementos de um objeto iteravel como array ou string
//let str = "Ola mundo"
//console.log(...str) => O l a m u n d o...
//usado para criar vários parâmetros
//ou usado para criar um novo array com elementos separados

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({ towns, townsCopy })

const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone })

const townsObj = { ...towns }
const townsObjClone = { ...townsObj }

townsObjClone.test = 'Test'

console.log({ townsObj, townsObjClone })

