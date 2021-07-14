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
/*
objeto modificado directamente
function crecer(persona) {
    perona.edad += 1
}
crecer(dafne) => dafne.edad = 24
*/

// copia de objeto
function crecer(persona) {
  return {
    ...persona,
    edad: (persona.edad += 1),
  };
}

crecer(dafne);
crecer(dario);
