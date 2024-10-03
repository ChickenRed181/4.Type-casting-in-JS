
console.log(String(console.log), typeof String(console.log))
console.log(Number(console.log), typeof Number(console.log))
console.log(Boolean(console.log), typeof Boolean(console.log))

const obj = { name: 'Maxim' }
console.log(String(obj), typeof String(obj))
console.log(Number(obj), typeof Number(obj))
console.log(Boolean(obj), typeof Boolean(obj))

const sym = Symbol('key')
console.log(String(sym), typeof String(sym))
console.log(Number(sym), typeof Number(sym))
console.log(Boolean(sym), typeof Boolean(sym))

console.log(String(Number), typeof String(Number))
console.log(Number(Number), typeof Number(Number))
console.log(Boolean(Number), typeof Boolean(Number))

console.log(String(''), typeof String(''))
console.log(Number(''), typeof Number(''))
console.log(Boolean(''), typeof Boolean(''))

console.log(String(0), typeof String(0))
console.log(Number(0), typeof Number(0))
console.log(Boolean(0), typeof Boolean(0))

console.log(String(-10), typeof String(-10))
console.log(Number(-10), typeof Number(-10))
console.log(Boolean(-10), typeof Boolean(-10))

console.log(String('-105'), typeof String('-105'))
console.log(Number('-105'), typeof Number('-105'))
console.log(Boolean('-105'), typeof Boolean('-105'))
