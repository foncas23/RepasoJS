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

//Modificamos el valor cliente del objeto de arribo
invoice.client = 'Donald Trump';
console.log(invoice);
console.log(invoice.client);