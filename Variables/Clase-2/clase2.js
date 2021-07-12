// STRINGS o CADENAS

var nombre = 'Dafne'

var apellido = 'Musante'

// Torna en mayúsculas al string
var nomMayus= nombre.toUpperCase()

// Torna a minúsculas al string
var apellidoMinus = apellido.toLowerCase()

// Obtener un caracter
var primerCaracter = nombre.charAt(0)
var ultimoCaracterCharAt = apellido.charAt(apellido.length -1)
var ultimoCaracterSubstr = apellido.substr(-1)
var ultimoCaracterSlice = apellido.slice(-1)
var ultimoCaracterIndice = apellido[apellido.length -1]

// cantidad de caracteres
var extensionNobre = nombre.length

// concatenar
var nombreCompleto = nombre + ' ' + apellido

// interpolacion o template string
var templateNombreCompleto = `${nombre} ${apellido}`

// acceder a un substring
var apodoConChartAt = nombre.charAt(0) + nombre.charAt(1) + nombre.charAt(2)

var apodoConSubstr = nombre.substr(0, 3)
