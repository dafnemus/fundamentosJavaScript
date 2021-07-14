const verde = document.getElementById('verde')
const rojo = document.getElementById('rojo')
const amarillo = document.getElementById('amarillo')
const azul = document.getElementById('azul')

const btnIniciar = document.getElementById('btnIniciar')

class Juego {
    constructor() {
        this.iniciarJuego()
    }

    iniciarJuego() {
        btnIniciar.classList.add('ocultar')
    }
}

function empezarJuego() {
    var juego = new Juego()
}
