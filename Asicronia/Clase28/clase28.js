const API_POKEMON = 'https://pokeapi.co/api/v2/pokemon/';
const POKEMON = ':name';

const opts = { crossDomain: true };

function obtenerPokemon(nombre, callback) {
  const url = API_POKEMON + POKEMON.replace(':name', nombre);

  const onPokemonNmeResponse = ({ name }) => {
    console.log(`Hola yo soy ${name}`);
    if (callback) {
      callback();
    }
  };
  $.get(url, opts, onPokemonNmeResponse);
}

// callbacks hells
obtenerPokemon('bulbasaur', function () {
  obtenerPokemon('ivysaur', function () {
    obtenerPokemon('venusaur', function () {
      obtenerPokemon('ditto');
    });
  });
});
