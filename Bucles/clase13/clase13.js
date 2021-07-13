let dafne = {
  nombre: 'Dafne',
  peso: 49,
};

let pepe = {
  nombre: 'Pepe',
  peso: 60,
};

const imprimirPesoInicial = ({ nombre, peso }) =>
  console.log(`Día 1 ${nombre} pesa: ${peso}`);

const AÑO = 365;

const INCREMENTO_PESO = 0.7;
const DECREMENTO_PESO = 0.4;

const aumentarPeso = (peso) => (peso += INCREMENTO_PESO);

const adelgazarPeso = (peso) => (peso -= DECREMENTO_PESO);

const simularAñoEnElGym = (persona) => {
  for (let dia = 1; dia <= AÑO; dia++) {
    let random = Math.random();
    if (random < 0.25) {
      persona.peso = aumentarPeso(persona.peso);
    } else if (random > 0.5) {
      persona.peso = adelgazarPeso(persona.peso);
    }
  }
};

const imprimirPesoFinal = ({ nombre, peso }) =>
  console.log(`Día 365 ${nombre} pesa: ${peso.toFixed(2)}`);

imprimirPesoInicial(dafne);
imprimirPesoInicial(pepe);
simularAñoEnElGym(dafne);
simularAñoEnElGym(pepe);
imprimirPesoFinal(pepe);
imprimirPesoFinal(dafne);
