// Numeros

var edad = 23;
// SUMA
// incremento extendido
var edad2022 = edad + 1;

// incremento abreviado
var edad2023 = (edad += 1);

var peso = 49;
// RESTA
// decremento
var pesoSemana1Gym = peso - 1;

var pesoSemana2Gym = (peso -= 1);

// MULTIPLICACION
var precioCafe = 150.3;

// OJO: JS al trabajAr con decimales no es tan preciso
var subtotal = precioCafe * 3;

// con un decimal
var total = (subtotal * 100) / 100;

// con mas de un decimal
var total2 = Math.round(precioCafe * 100 * 3) / 100;

// guardar hasta dos decimales
var totalStr = subtotal.toFixed(2);

// DIVISIÓN
var pizza = 8;
var comensales = 2;
var porcionPorComensal = pizza / comensales;
