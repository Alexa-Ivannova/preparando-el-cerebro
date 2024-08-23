// LOOP DE PARES
// Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.
const numberLoop = 3;

const loopDePares = (num) => {
  for (let i = 0; i <= 100; i++) {
    if ((i + num) % 2 === 0) {
      // console.log(`El número ${i} es par`);
    } else {
      // console.log(i);
    }
  }
};
loopDePares(numberLoop);

// LOOP DE IMPARES CON PALABRA
// Deberás crear una función llamada loopDeImpares que reciba como parámetros un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.
const numLoop = 1;
const world = "Hola";

const loopDeImpares = (numero, palabra) => {
  for (let i = 0; i <= 100; i++) {
    if ((i + numero) % 2 != 0) {
      //   console.log(palabra);
    } else {
      //   console.log(i);
    }
  }
};
loopDeImpares(numLoop, world);

// SUMATORIA NÚMERO
// Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)
// sumatoria(8) debe retornar 36
const numberSum = 3;

const sumatoria = (numSum) => {
  let suma = 0;
  for (let i = 1; i <= numSum; i++) {
    suma += i;
  }
  return suma;
};
sumatoria(numberSum);
// console.log(sumatoria(numberSum));

// NUEVO ARREGLO
// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
const numArray = 5;

const nuevoArreglo = (numberArray) => {
  const array = [];
  for (let i = 1; i <= numberArray; i++) {
    array.push(i);
  }
  return array;
};
nuevoArreglo(numArray);
// console.log(nuevoArreglo(numArray));

// SIMILAR STRING.SPLIT
// Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]
const worldSplit = "hola";

const functionSplit = (world) => {
  let arrayWorldSplit = [];
  for (let i = 0; i < world.length; i++) {
    arrayWorldSplit.push(world[i]);
  }
  return arrayWorldSplit;
};
functionSplit(worldSplit);
// console.log(functionSplit(worldSplit));

// Manejando dos arreglos
// Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar:
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a
