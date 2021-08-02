function herencia(prototipoHijo, prototipoPadre) {
  var fn = function () {};
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn();
  prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

Persona.prototype.saludar = function () {
  console.log(`Hola! me llamo ${this.nombre} ${this.apellido}`);
};

const esAlto = (altura) => altura >= 1.8;

Persona.prototype.calcularAltura = function () {
  esAlto(this.altura)
    ? console.log(`${this.nombre} es una persona alta.`)
    : console.log(`${this.nombre} no es una persona alta.`);
};

function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

herencia(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
  console.log(`Hola! me llamo ${this.nombre} y soy desarrolladore.`);
};

var dafne = new Persona('Dafne', 'Musante');
dafne.saludar();
dafne.calcularAltura();

var desarrolladora = new Desarrollador('Dafne', 'Musante');
desarrolladora.saludar();
