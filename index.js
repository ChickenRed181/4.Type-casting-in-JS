let age = 18
console.log(Number(age), Boolean(age), String(age))

let usName = "Sam"
console.log(Number(usName), Boolean(usName), String(usName))

let isStudent = true
console.log(Number(isStudent), Boolean(isStudent), String(isStudent))

let user = { id: 8, name: 'Sam' }
console.log(Number(user), Boolean(user), String(user))

let bigNumber = BigInt(123456789012345678901758932146)
console.log(Number(bigNumber), Boolean(bigNumber), String(bigNumber))

let nothing = null
console.log(Number(nothing), Boolean(nothing), String(nothing))

let unDefined
console.log(Number(unDefined), Boolean(unDefined), String(unDefined))

let ID = Symbol("id")
console.log(Boolean(ID), String(ID))
