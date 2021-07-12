var dafne = {
    nombre: 'Dafne',
    edad: 23
}

var pepe = {
    nombre: 'Pepe',
    edad: 13
}

const ADULTEZ_DESDE = 18

function esAdulto(edad) {
    return edad >= ADULTEZ_DESDE
}

function imprimirRangoEdad({ nombre, edad }) {
    if (esAdulto(edad)) {
        console.log(`${nombre} es mayor de edad.`)
    } else {
        console.log(`${nombre} es menor de edad.`)
    }
    
}

imprimirRangoEdad(dafne)
imprimirRangoEdad(pepe)
