var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72,
  cantidadDeLibros: 111,
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86,
  cantidadDeLibros: 78,
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85,
  cantidadDeLibros: 132,
};

var dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1.71,
  cantidadDeLibros: 90,
};

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56,
  cantidadDeLibros: 91,
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76,
  cantidadDeLibros: 182,
};

var personas = [sacha, alan, martin, dario, vicky, paula];

// total libros con for
var totalLibros = 0;
for (var i = 0; i < personas.length; i++) {
  totalLibros += personas[i].cantidadDeLibros;
}

console.log(`Las personas juntan un total de ${totalLibros} libros.`);

// con reduce
var contador = 0;
const reducer = (contador, { cantidadDeLibros }) =>
  (contador += cantidadDeLibros);

var librosTotales = personas.reduce(reducer, 0);

console.log(`Las personas juntan un total de ${librosTotales} libros.`);
