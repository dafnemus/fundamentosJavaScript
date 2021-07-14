const API_POKEMON = 'https://pokeapi.co/api/v2/pokemon/';
const POKEMON = ':name';

const bulbasaur = API_POKEMON + POKEMON.replace(':name', 1);

const opts = { crossDomain: true };

const onPokemonNmeResponse = ({ name }) => console.log(`Hola yo soy ${name}`);

$.get(bulbasaur, opts, onPokemonNmeResponse);
