//Clase de Arreglos/Listas

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


console.log('Total: ' + invoice1.total());


//Duplicar objeto
const invoice2 = invoice1;

//Compara si ambos objetos tiene la misma estructura
const result1 = invoice1 === invoice2;

if(result1){
  console.log('Los objetos son iguales ' + result1)
}else{
  console.log('No son iguales')
}

//Clonar objetos, es crear una nueva instancia
const invoice3 = {... invoice1 };
const result2 = invoice1 === invoice3;

if(result2){
  console.log(result2)
}else{
  console.log('No son iguales')
}

