const verde = document.getElementById('verde');
const rojo = document.getElementById('rojo');
const amarillo = document.getElementById('amarillo');
const azul = document.getElementById('azul');

const btnIniciar = document.getElementById('btnIniciar');

const ULTIMO_NIVEL = 10;
class Juego {
  constructor() {
    this.iniciarJuego = this.iniciarJuego.bind(this);
    this.iniciarJuego();
    this.generarSecuencia();
    setTimeout(this.pasarDeNivel, 500);
  }

  iniciarJuego() {
    this.elegirColor = this.elegirColor.bind(this);
    this.pasarDeNivel = this.pasarDeNivel.bind(this);
    this.toggleBtnIniciar();
    this.nivel = 1;
    this.colores = {
      verde,
      rojo,
      amarillo,
      azul,
    };
  }

  toggleBtnIniciar() {
    btnIniciar.classList.contains('ocultar')
      ? btnIniciar.classList.remove('ocultar')
      : btnIniciar.classList.add('ocultar');
  }

  generarSecuencia() {
    this.secuencia = new Array(ULTIMO_NIVEL)
      .fill(0)
      .map(() => Math.floor(Math.random() * 4));
  }

  pasarDeNivel() {
    this.subNivel = 0;
    this.iluminarSecuencia();
    this.agregarClickColors();
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

  convertirColEnNum(color) {
    switch (color) {
      case 'verde':
        return 0;
      case 'rojo':
        return 1;
      case 'amarillo':
        return 2;
      case 'azul':
        return 3;
    }
  }

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.convertirNumEnCol(this.secuencia[i]);
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

  agregarClickColors() {
    this.colores.verde.addEventListener('click', this.elegirColor);
    this.colores.rojo.addEventListener('click', this.elegirColor);
    this.colores.amarillo.addEventListener('click', this.elegirColor);
    this.colores.azul.addEventListener('click', this.elegirColor);
  }

  eliminarClicks() {
    this.colores.verde.removeEventListener('click', this.elegirColor);
    this.colores.rojo.removeEventListener('click', this.elegirColor);
    this.colores.amarillo.removeEventListener('click', this.elegirColor);
    this.colores.azul.removeEventListener('click', this.elegirColor);
  }

  elegirColor(ev) {
    const nombreColor = ev.target.dataset.color;
    const numeroColor = this.convertirColEnNum(nombreColor);
    this.iluminarColor(nombreColor);
    if (numeroColor === this.secuencia[this.subNivel]) {
      this.subNivel++;
      if (this.subNivel === this.nivel) {
        this.nivel++;
        this.eliminarClicks();
        if (this.nivel === ULTIMO_NIVEL + 1) {
          this.ganoElJuego();
        } else {
          setTimeout(this.pasarDeNivel, 2000);
        }
      }
    } else {
      this.perdioElJuego();
    }
  }

  ganoElJuego() {
    swal('Ganaste', 'Felicidades', 'success').then(this.iniciarJuego);
  }

  perdioElJuego() {
    swal('Perdiste', 'Jugar de nuevo?', 'error').then(() => {
      this.iniciarJuego();
      this.eliminarClicks();
    });
  }
}

function empezarJuego() {
  window.juego = new Juego();
}
