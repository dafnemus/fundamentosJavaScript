const API_POKEMON = 'https://pokeapi.co/api/v2/pokemon/';
const POKEMON = ':name';

const opts = { crossDomain: true };

const onPokemonNameResponse = ({ name }) => console.log(`Hola yo soy ${name}`);

const ErrorNombrePokemon = (nombre) =>
  console.log(`No se pudo obtener el pokemon ${nombre}`);

function obtenerPokemon(nombre) {
  return new Promise((resolve, reject) => {
    const url = API_POKEMON + POKEMON.replace(':name', nombre);
    $.get(url, opts, (data) => resolve(data)).fail(() => reject(nombre));
  });
}

var pokemones = ['bulbasaur', 'pikachu', 'ditto', 'charizard', 'squirtle'];

var promesas = pokemones.map((pokemon) => obtenerPokemon(pokemon));

async function obtenerSaludoPokemones() {
  try {
    var pokemones = await Promise.all(promesas);
    for (var i = 0; i < pokemones.length; i++) {
      onPokemonNameResponse(pokemones[i]);
    }
  } catch (error) {
    ErrorNombrePokemon(error);
  }
}

obtenerSaludoPokemones();
