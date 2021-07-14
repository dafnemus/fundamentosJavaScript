const verde = document.getElementById('verde');
const rojo = document.getElementById('rojo');
const amarillo = document.getElementById('amarillo');
const azul = document.getElementById('azul');

const btnIniciar = document.getElementById('btnIniciar');

class Juego {
  constructor() {
    this.iniciarJuego();
    this.generarSecuencia();
    this.pasarDeNivel();
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

  pasarDeNivel() {
    this.iluminarSecuencia();
  }

  convertirNumEnCol(numero) {
    switch (numero) {
      case 0:
        return 'verde';
      case 1:
        return 'rojo';
      case 2:
        return 'amarillo';
      case 3:
        return 'azul';
    }
  }

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      let color = this.convertirNumEnCol(this.secuencia[i]);
      setTimeout(() => {
        this.iluminarColor(color);
      }, 1000 * i);
    }
  }

  iluminarColor(color) {
    this.colores[color].classList.add('light');
    setTimeout(() => {
      this.apagar(color);
    }, 350);
  }

  apagar(color) {
    this.colores[color].classList.remove('light');
  }
}

function empezarJuego() {
  var juego = new Juego();
}
