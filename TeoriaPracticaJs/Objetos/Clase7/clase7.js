var dafne = {
  nombre: 'Dafne',
  apellido: 'Musante',
  edad: 23,
};

var dario = {
  nombre: 'Darío',
  apellido: 'Lopilato',
  edad: 35,
};

function imprimirNombreEnMayuscula(persona) {
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayuscula(dafne);
imprimirNombreEnMayuscula(dario);

function imprimirNombreYEdad({ nombre, edad }) {
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(dafne);
imprimirNombreYEdad(dario);
