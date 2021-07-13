class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    console.log(`Hola! me llamo ${this.nombre} ${this.apellido}`);
  }

  esAlto() {
    return this.altura >= 1.8;
  }

  calcularAltura() {
    this.esAlto()
      ? console.log(`${this.nombre} es una persona alta.`)
      : console.log(`${this.nombre} no es una persona alta.`);
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }

  saludar() {
    console.log(`Hola! me llamo ${this.nombre} y soy desarrolladore.`);
  }
}

function responder(nombre, apellido, esDev) {
  console.log(`Hola ${nombre} ${apellido}`);
  if (esDev) {
    console.log('Ah, no sabía. Que bueno eso');
  }
}

var dafne = new Persona('Dafne', 'Musante');
dafne.saludar();
dafne.calcularAltura();

var desarrolladora = new Desarrollador('Dafne', 'Musante', 1.5);
desarrolladora.saludar();
