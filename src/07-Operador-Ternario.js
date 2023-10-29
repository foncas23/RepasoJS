/**
 * Operador ternario
 */
const notesList = [6.3, 9.4, 7, 5.4, 5.6]

notesList.forEach(function(arrayValue) {
  /**
   * Declaramos un operador ternario, esta función va a comprobar que el valor de la constante
   * declarada arriba sea mayor o igual a 5.5, si esta condución se cumple asignará a la variable
   * state el valor de Aprobada, sino le asignará el valor de Supensa
   */
  const state = (arrayValue >= 5.5) ? 'Aprobada' : 'Suspendida';
  console.log(`La asignatura se encuentra: ${state} ${arrayValue}`);
});


/**
 * En esta parte de código tenemos 3 variables con diferentes valores, y queremos saber cual 
 * es la que tiene más valor.
 */
let max = 0;

const a = 5;
const b = 8;
const c = 12;

/**
 * Si a es mayor que b asignamos el valor de a a la variable MAX, y si fuera b mayor le asignaria ese valor a MAX
 */
max = a > b ? a : b;

/**
 * Como ya tenemos el valor MAYOR almacenado en MAX entre a y b, Ahora deberemos comprobar si ese valor es mayor o menos al
 * valor asignado a la variable c. Y en función esa comparación la variable MAX mantendrá el valor de 
 * la primera comparación o se le asignará el valor de C
 */
max = max > c ? max : c;
console.log(`El simbolo mayor es: ${max}`)