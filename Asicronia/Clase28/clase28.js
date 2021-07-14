const API_POKEMON = 'https://pokeapi.co/api/v2/pokemon/';
const POKEMON = ':name';

const opts = { crossDomain: true };

const onPokemonNmeResponse = ({ name }) => console.log(`Hola yo soy ${name}`);

const ErrorNombrePokemon = (nombre) =>
  console.log(`No se pudo obtener el pokemon ${nombre}`);

function obtenerPokemon(nombre, callback) {
  const url = API_POKEMON + POKEMON.replace(':name', nombre);

  $.get(url, opts, callback).fail(() => ErrorNombrePokemon(nombre));
}

// callbacks hells
obtenerPokemon('bulbasaur', function (personaje) {
  onPokemonNmeResponse(personaje);
  obtenerPokemon('ivysaur', function (personaje) {
    onPokemonNmeResponse(personaje);
    obtenerPokemon('venusaur', function (personaje) {
      onPokemonNmeResponse(personaje);
      obtenerPokemon('ditt', function (personaje) {
        onPokemonNmeResponse(personaje);
      });
    });
  });
});
