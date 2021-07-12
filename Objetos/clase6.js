var dafne = {
    nombre: 'Dafne',
    apellido: 'Musante',
    edad: 23
}

var dario = {
    nombre: 'Darío',
    apellido: 'Lopilato',
    edad: 35
}

// destructuring
function imprimirNombreEnMayuscula({ nombre }) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayuscula(dafne)
imprimirNombreEnMayuscula(dario)
