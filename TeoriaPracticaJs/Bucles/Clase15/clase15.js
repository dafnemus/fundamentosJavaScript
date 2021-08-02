let contador = 0;

const llueve = () => Math.random() < 0.25;

const verLluvia = () => {
  do {
    contador++;
  } while (!llueve());
};

const VecesQueVioLaLluvia = () => {
  contador > 1
    ? console.log(`Vió la lluvia ${contador} veces.`)
    : console.log(`Vió la lluvia ${contador} vez.`);
};

verLluvia()
VecesQueVioLaLluvia()
