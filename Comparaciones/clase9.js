var x = 4, y = '4'

// comparación 1 ==
console.log(`${x} == ${y}: ${x == y}`)

// comparacion 2 ===
console.log(`${x} === ${y}: ${x === y}`)

// comparación objetos
var dafne = {
    nombre: 'Dafne'
}

var otraPersona = {
    nombre: 'Dafne'
}

// false
console.log(`${dafne} === ${otraPersona}: ${dafne === otraPersona}`)

// true
console.log(`${dafne.nombre} === ${otraPersona.nombre}: ${dafne.nombre === otraPersona.nombre}`)
