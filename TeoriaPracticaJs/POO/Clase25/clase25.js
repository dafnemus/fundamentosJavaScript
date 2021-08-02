class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(`Hola! me llamo ${nombre} ${apellido}`);
    if (fn) {
      fn(nombre, apellido);
    }
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

  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(`Hola! me llamo ${nombre} y soy desarrolladore.`);
    if (fn) {
      fn(nombre, apellido, true);
    }
  }
}

function responder(nombre, apellido, esDev) {
  console.log(`Buenas ${nombre} ${apellido}`);
  if (esDev) {
    console.log('Ah, no sabía. Que bueno eso');
  }
}

var dafne = new Persona('Dafne', 'Musante');
dafne.saludar();
dafne.saludar(responder);

var marta = new Desarrollador('Marta', 'Peréz', 1.5);
marta.saludar(responder);
