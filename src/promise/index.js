// Ejemplo simple de "Promises"
const promise = new Promise(function (resolve, reject){               // Guardamos el valor de una nueva instanciación de una Promase en una varibla, la promose tiene 2 funciones internas "resolve" y "reject"
  resolve('hey!');
});



// Segundo ejemplo de "Promises"
const cows = 15;

const countCows = new Promise(function (resolve, reject){               // Instanciamos una nueva Promesa y la guardamos en una variable
  if (cows > 10) {                                                      // Validamos si tenemos el suficiente número de vacas
    resolve(`We have ${cows} cows on the farm, we can produce`);        // Pasamos un mensaje String a la función "resolve" si se cumple la condición de nuestra promesa
  } else {                                                              
    reject('There are not enough cows on the farm');                    // Pasamos un mensaje String a la función "reject" cuando no se cumple la condicíon
  }
});

countCows.then((result) => {                              // Ejecutamos nuestra variable que contiene la Promesa, utilizamos el método ".then()" el cual adentro tendrá una función (en este caso un Arrow Function para mejor legibilidad, se pueden usar Funciones Anónimas)
  console.log(result);                                    // El parámetro "result" tomara el valor de "resolve()" cuando definimos nuestra Promesa
}).catch((error) => {                                     // Con el método "catch()" podemos capturar el valor del "reject()" ya que no se pudo cumplir la Promesa (condición If)
  console.log(error);                                     // El parámetro "erro" tomará el valor de del "reject()" cuando lo definimos en nuestra Promesa
}).finally(() => {                                        // Con la palabra reservada ".finally()" que se ejecuta al final de la Promesa sin importar si esta fue "Resolve" o "Reject"
  console.log('Finally');                                 // Aplicamos cualquier lógica que queramos 
})