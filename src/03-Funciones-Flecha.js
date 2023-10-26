//Funciones flecha

/**
 * En esta función tenemos dos parámetros de entrada, los cuales son opciones de pasar a la función
 * cuando esta es llamada, de ser así cogerá los valores por defecto
 * @param {*} name 
 * @param {*} age 
 * @returns 
 */
const sayHello1 = (name = 'Pepe', age = 10) =>{
  const greeting = `Hola mundo function arrow! soy ${name} y tengo ${age} de edad`
  return greeting
}
const result1 = sayHello1();
console.log(result1)

/**
 * En esta función tenemos dos parámetros de entrada, los cuales pasamos al llamar a la función, y pisan los valores por defecto que tiene.
 * En este ejemplo vemos que no es necesario declarar una constante para almacenar el valor y luego devolverlo.
 * @param {*} name 
 * @param {*} age 
 * @returns 
 */
const sayHello2 = (name = 'Pepe', age = 10) =>{
  return `Hola mundo function arrow! soy ${name} y tengo ${age} de edad`
}
const result2 = sayHello2('Alfonso', 30);
console.log(result2)

/**
 * Optimización del código, es otra manera de ahorrar líneas de código, y hace exactamente lo mismo que las funciones anteriores
 * @param {*} name 
 * @param {*} age 
 * @returns 
 */
const sayHello3 = (name = 'Pepe', age = 10) =>  `Hola mundo function arrow! soy ${name} y tengo ${age} de edad`

const result3 = sayHello3('Alfonso', 30);
console.log(result3)

/**
 * Es igual que el ejemplo anterior pero en este caso para hacer operación sumar
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const sumar = (a = 0, b = 0) => a+b;
console.log('El resultado de la sumar es: ' + sumar(5,3));