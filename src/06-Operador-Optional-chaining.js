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
  items: [
    {
      product: 'keyboard',
      price: 50,
      quantity:2
    },
    {
      product: 'mouse',
      price: 200,
      quantity: 1
    },
    {
      product: 'paper',
      price: 65,
      quantity: 10
    }
  ],
  total: function(){
    let total = 0;
    this.items.forEach(item => {
      total = total + (item.price*item.quantity);
    })
    return total;
  },
  greeting: function(){
    return `Hola ${this.client.name}`
  }
};
/**
 * El operador ? seguidamente de un atributi del objeto, y este atributo no existe en dicho objeto, controlamos el error
 * de atributo no definido
 */
console.log(invoice1.company?.name);
//(invoice1.company != undefined && invoice1.company.name) esta comprobación es igual a la que tenemos en el siguiente if
if (invoice1.company?.name) {
  console.log('Prefecto, tenemos el atributo company');
}else{
  console.log('No viene el atributo company')
}


/**
 * Comprobamos que el objeto invoice1 contiene el objeto cliente y que este tiene el atributo name
 */
if (invoice1.client?.name) {
  console.log('Prefecto, tenemos el atributo cliente y nombre');
}else{
  console.log('No viene el atributo atributo cliente y nombre')
}

/**
 * Como podemos ver es importante poner el operador ? (optional) en los atributos los cuales pueden estar definidos dentro del objeto o no
 * si no ponemes adress? no controlaría el error en la consola
 */
if(invoice1.client?.adress?.street){
  console.log('Prefecto, tenemos el atributo cliente y addres y street');
}else{
  console.log('No viene el atributo cliente y addres')
}

invoice1.ad