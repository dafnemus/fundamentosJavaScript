const API_POKEMON = 'https://pokeapi.co/api/v2/pokemon/';
const POKEMON = ':name';

const opts = { crossDomain: true };

const onPokemonNmeResponse = ({ name }) => console.log(`Hola yo soy ${name}`);

function obtenerPokemon(nombre) {
  const url = API_POKEMON + POKEMON.replace(':name', nombre);
  $.get(url, opts, onPokemonNmeResponse);
}

obtenerPokemon('ditto')
obtenerPokemon('bulbasaur')
obtenerPokemon('pikachu')
obtenerPokemon('charizard')
