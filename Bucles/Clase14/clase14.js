let dafne = {
  nombre: "Dafne",
  peso: 49,
};

let pepe = {
  nombre: "Pepe",
  peso: 60,
};

const imprimirPesoInicial = ({ nombre, peso }) =>
  console.log(`Día 1 ${nombre} pesa: ${peso}`);

const AÑO = 365;

const INCREMENTO_PESO = 0.7;
const DECREMENTO_PESO = 0.4;

const META = (dafne.peso -= 3);

const aumentarPeso = (peso) => (peso += INCREMENTO_PESO);

const adelgazarPeso = (peso) => (peso -= DECREMENTO_PESO);

const comeMucho = () => Math.random().toFixed(2) < 0.3;

const realizaDeporte = () => Math.random().toFixed(2) > 0.4;

var dias = 0;

const llegarMetaPeso = (persona) => {
  while (persona.peso > META) {
    if (comeMucho()) {
      persona.peso = aumentarPeso(persona.peso);
    }
    if (realizaDeporte()) {
      persona.peso = adelgazarPeso(persona.peso);
    }
    dias += 1;
  }

  return dias;
};

const imprimirPesoFinal = ({ nombre, peso }) => {
  console.log(
    `A ${nombre} le llevo ${dias} días para llegar a la meta. Ahora pesa: ${peso.toFixed(2)}`
  );
};

imprimirPesoInicial(dafne);
imprimirPesoInicial(pepe);
llegarMetaPeso(dafne);
llegarMetaPeso(pepe);
imprimirPesoFinal(pepe);
imprimirPesoFinal(dafne);
