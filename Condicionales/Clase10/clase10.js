var dafne = {
  nombre: 'Dafne',
  apellido: 'Musante',
  edad: 23,
  ingeniere: false,
  cocinere: true,
  cantante: false,
  estudiante: true,
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `);
  if (persona.ingeniere) {
    console.log('Ingeniere');
  }

  if (persona.cocinere) {
    console.log('Cocinere');
  }

  if (persona.cantante) {
    console.log('Cantante');
  }

  if (persona.estudiante) {
    console.log('Estudiante');
  }
}

imprimirProfesiones(dafne);

function esMayorDeEdad({ nombre, edad }) {
  if (edad >= 18) {
    console.log(`${nombre} es mayor de edad.`);
  } else {
    console.log(`${nombre} es menor de edad`);
  }
}

esMayorDeEdad(dafne);
