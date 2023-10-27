//Objetos en JS

/**
 * Definimos el objeto invoice/factura
 */
const invoice = {
  id:10,
  name: 'Compras de oficina',
  date: new Date(),
  client: 'Jhon Smith',
  total: 1000
};

//Modificamos el valor cliente del objeto de arriba
invoice.client = 'Donald Trump';
console.log(invoice);
console.log(invoice.client);

//Objetos anidados

const invoice1 = {
  id:10,
  name: 'Compras de oficina',
  date: new Date(),
  client: {
    id:2,
    name: 'Jhon',
    lastName: 'Smith',
    age: 35
  },
  total: 1000,
  greeting: function(){
    return `Hola ${this.client.name}`
  }
};

//Modificamos el valor cliente del objeto de arriba
console.log('Objeto invoice1 sin modificar');
console.log(invoice1);
console.log('Objeto invoice1 modificamos el nombre');
invoice1.client.name = 'Donald Trump';
console.log(invoice1);
console.log(invoice1.client);
/**
 * Almacenamos el valor que devuelve la función greeting, también podemos hacer la
* la llamada dentro del console.log(invoice1.greeting()) y mostraría lo mismo
*/
const greeatin = invoice1.greeting();
console.log(greeatin)