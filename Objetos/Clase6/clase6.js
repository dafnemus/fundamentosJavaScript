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

function imprimirNombreEnMayuscula(persona) {
    console.log(persona.nombre.toUpperCase())
}

imprimirNombreEnMayuscula(dafne)
imprimirNombreEnMayuscula(dario)
