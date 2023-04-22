// "async" define una función asíncrona que devuelve un objeto
// Vamos solicitar la misma información a la API que en los otros ejercicios
const functionAsync = () => {                                                           // En la variable "functionAsync" guardamos una función anonima (Arrow Function en este caso) y retorna una Promesa
  return new Promise((resolve, reject) => {                                             // Retornamos un promesa, la cual siempre tiene que llevar sus parámetros "resolve y reject" en una Arrow Function
    (true) ? setTimeout(() => resolve('✅✅ Async, después de 2 segundos ✅✅'), 2000)   // Hacemos una validación usando un "if ternario" (la que usa el simbolo '?'), es caso es verdadera la validación hacemos nuestro "resolve()" con un mensaje adentro y todo eso lo metemos en un "setTimeout" con un Arrow Function y con 2 segundos de retraso
    : reject(new Error('Error!'));                                                      // En caso no sea cierto la validación usamos nuestro "reject()" y adentor hacemos la instanciación de un error con un mensaje de error
  });
}


const anotherFunction = async () => {                           // Esta función utiliza el concepto de "async" el cual lo podemos poner antes de una declaración de una función normal o de un Arrow Functio, todo eso lo guardamos en la variable "anotherFunction"
  const someMessage = await functionAsync();                    // Hacemos uso de la palabra reservada "await" para interactuar con el "async" y a la par invomos a la función de arriba "functionAsync" la cual nos regresa una Promesa, y cuando esa petición sea resualta vamos a poder mostrar esa información, aquí nos está regresando una Promesa
  console.log(someMessage);                                     // Muestro el mensaje que me retornaron en la línea anterior y que quedó guardado en la variable "message"
  console.log('Ya mostré el mensaje');                          // Este "console.log" se ejecutar de forma Sincrona (despues que se imprima el anterior "console.log"), (Esto solo sucede adentro de esta función, los "console.log" de afuera no van a esperar y se ejecutaran sin bloqueos)
}

console.log('Message before declaring Async');                  // Primera instrucción a ejecutarse
anotherFunction();                                              // Invocamos nuestra función "anotherFuction" que adentro contiene la lógica "async-await". Al usar "Async" la instrucciónes no bloquean la ejecución del resto del código
console.log('Message after declaring Async but I dont have to wait');                 // Segunda intrucción a ejecutarse debido a que "anotherFunction" es una función asincrona y tiene un setTimeout de 2 segundos