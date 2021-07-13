function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
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

var dafne = new Persona('Dafne', 'Musante', 1.53);
dafne.saludar()
dafne.calcularAltura()
