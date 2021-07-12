var dafne = {
    nombre: 'Dafne',
    edad: 23
}

var pepe = {
    nombre: 'Pepe',
    edad: 13
}

const ADULTEZ_DESDE = 18

const esAdulto = edad => edad >= ADULTEZ_DESDE

const imprimirAcceso = ({ nombre, edad }) => esAdulto(edad) ? console.log(`${nombre} entra.`) : console.log(`${nombre} rebotado.`)

imprimirAcceso(dafne)
imprimirAcceso(pepe)
