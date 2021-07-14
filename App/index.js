const verde = document.getElementById('verde');
const rojo = document.getElementById('rojo');
const amarillo = document.getElementById('amarillo');
const azul = document.getElementById('azul');

const btnIniciar = document.getElementById('btnIniciar');

class Juego {
  constructor() {
    this.iniciarJuego();
    this.generarSecuencia();
  }

  iniciarJuego() {
    btnIniciar.classList.add('ocultar');
    this.nivel = 1;
    this.colores = {
      verde,
      rojo,
      amarillo,
      azul,
    };
  }

  generarSecuencia() {
    this.secuencia = new Array(10)
      .fill(0)
      .map(() => Math.floor(Math.random() * 4));
  }
}

function empezarJuego() {
  var juego = new Juego();
}
