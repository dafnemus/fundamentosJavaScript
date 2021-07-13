function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function () {
  console.log(`Hola! me llamo ${this.nombre} ${this.apellido}`);
};

var dafne = new Persona("Dafne", "Musante", 1.53);
