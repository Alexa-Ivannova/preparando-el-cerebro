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


