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

