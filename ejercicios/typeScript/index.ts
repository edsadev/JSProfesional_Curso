console.log('Hola typescript')

// : -> asigna el tipo de variable, puede ser boolean, number o string.

function sumar (a: number, b: number){
  return a + b
}

console.log(sumar (2, 6))

// Arreglos -> Se puede definir 
// string[] <- Arreglo de strings
// Array< string | number > <- Arreglo de strings y números

// enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul'
}

let colorFavorito: Color = Color.Rojo

// Any
let comodin: any = 'Joker'
comodin = { type: 'WildCard' }

// : Object

// Funciones -> En Typescript podemos ser explícitos con el tipo de los argumentos y el tipo de retorno de una función


//    Argumentos: Números,  Retorna: Número
function add(a: number, b: number): number {
  return a + b
}

const sum = add(4, 4)

// Funciones que regresan funciones
//                          Valor de regreso es una función
function createAdder (a: number): (number) => number {
  return function (b: number){
    return b + a
  }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

// ? hace que el parámetro sea opcional, o sea puede permitir ser undefined o string
function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`
}
// el = 'Salamanca' luego del : string hace que el parametro lastName tenga un parametro default a "Salamanca"
function fullNameV2(firstName: string, lastName: string = 'Salamanca'): string {
  return `${firstName} ${lastName}`
} 

const edmundo = fullName('Edmundo')

// Interfaces: Nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no. En otras palabras no se pueden añadir propiedades de más ni de menos a menos que sean opcionales

interface Rectangulo {
  ancho: number
  alto: number
  color?: Color
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.Rojo
}

function area(r: Rectangulo): number{
  return r.alto * r.ancho
}

const areaRect = area(rect)

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}

console.log(rect.toString())