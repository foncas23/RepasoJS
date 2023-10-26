//Funciones

/**
 * Función sin parámetros
 * @returns 
 */
function sayHello1(){

  const greeting = 'Hola mundo function!';
  return greeting;
}
const result = sayHello1();
console.log(result);

/**
 * Función que recibe parámetro de entrada
 * @param {*} name 
 * @returns 
 */
function sayHalleo2(name){
  const greeting = `Hola mundo function soy ${name}`;
  return greeting;
}
const reuslt1 = sayHalleo2('Alfonso');
console.log(reuslt1);

/**
 * Función que tiene valor por defecto para tener en cuenta si no se le pasa parámetro, 
 *si le pasrámos parámetro cuando llamamos a la función sería ese el valor
 * @param {*} name 
 * @returns 
 */
function sayHalleo3(name = 'Juan'){
  const greeting = `Hola mundo function soy ${name}`;
  return greeting;
}
const reuslt3 = sayHalleo3();
console.log(reuslt3);