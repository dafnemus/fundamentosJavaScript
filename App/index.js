const verde = document.getElementById('verde');
const rojo = document.getElementById('rojo');
const amarillo = document.getElementById('amarillo');
const azul = document.getElementById('azul');
const btnIniciar = document.getElementById('botonIniciar');
const NIVEL_INICIAL = 1;
const CANTIDAD_NIVELES = 10;
const TIEMPO_PASAR_DE_NIVEL = 2000;
const TIEMPO_INICIAR_SIGUIENTE_NIVEL = 700;
const TIEMPO_ILUMINACION_SECUENCIA = 1000;
const TIEMPO_ILUMINAR_COLOR = 450;

class Juego {
  constructor() {
    this.iniciarJuego = this.iniciarJuego.bind(this);
    this.elegirColor = this.elegirColor.bind(this);
    this.pasarDeNivel = this.pasarDeNivel.bind(this);
    this.iniciarJuego();
    this.generarSecuencia();
    setTimeout(this.pasarDeNivel, TIEMPO_INICIAR_SIGUIENTE_NIVEL);
  }

  iniciarJuego() {
    this.toggleBtnIniciar();
    this.nivel = NIVEL_INICIAL;
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
    this.secuencia = new Array(CANTIDAD_NIVELES)
      .fill(0)
      .map(() => Math.floor(Math.random() * 4));
  }

  pasarDeNivel() {
    this.subNivel = 0;
    this.iluminarSecuencia();
    this.agregarClickColors();
  }

  convertirNumeroEnColor(numero) {
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

  convertirColorEnNumero(color) {
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
      const color = this.convertirNumeroEnColor(this.secuencia[i]);
      setTimeout(() => {
        this.iluminarColor(color);
      }, TIEMPO_ILUMINACION_SECUENCIA * i);
    }
  }

  iluminarColor(color) {
    this.colores[color].classList.add('light');
    setTimeout(() => {
      this.apagar(color);
    }, TIEMPO_ILUMINAR_COLOR);
  }

  apagar(color) {
    this.colores[color].classList.remove('light');
  }

  agregarClickColors() {
    Object.values(this.colores).forEach((item) =>
      item.addEventListener('click', this.elegirColor)
    );
  }

  eliminarClicks() {
    Object.values(this.colores).forEach((item) =>
      item.removeEventListener('click', this.elegirColor)
    );
  }

  elegirColor(event) {
    const nombreColor = event.target.dataset.color;
    const numeroColor = this.convertirColorEnNumero(nombreColor);
    this.iluminarColor(nombreColor);
    if (numeroColor === this.secuencia[this.subNivel]) {
      this.subNivel++;
      if (this.subNivel === this.nivel) {
        this.nivel++;
        this.eliminarClicks();
        if (this.nivel === CANTIDAD_NIVELES + 1) {
          this.ganoElJuego();
        } else {
          setTimeout(this.pasarDeNivel, TIEMPO_PASAR_DE_NIVEL);
        }
      }
    } else {
      this.perdioElJuego();
    }
  }

  ganoElJuego() {
    swal('Ganaste', 'Felicidades', 'success', {
      className: 'swal-modal',
    }).then(this.iniciarJuego);
  }

  perdioElJuego() {
    swal('Perdiste', 'Jugar de nuevo?', 'error', {
      className: 'swal-modal',
    }).then(() => {
      this.iniciarJuego();
      this.eliminarClicks();
    });
  }
}

function empezarJuego() {
  window.juego = new Juego();
}
