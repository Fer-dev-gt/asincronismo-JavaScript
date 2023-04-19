function sumar(num1, num2){                     // Función que retorna la suma de 2 números, la enviaremos como argumento a otra función para convertirla en un "CallBack"
    return num1 + num2;
}

function calcular(num1, num2, callback){        // Función que recibe 2 números y una función a la cual llamaremos "callback"
    return callback(num1, num2);
}

console.log(calcular(2, 3, sumar));             // Invocamos la función "calcular" y mandamos como Callback a la función "sumar"


// Ejercicio usando "setTimeOut" y una función anónima, "setTimeout" por si misma ya es un Callback ya que recibe una función como argumento

setTimeout(function(){                          // El "setTimeout" recibe como argumentos: una función, el tiempo en milisegundo, argumentos
    console.log('Hola JavaScript desde una función "setTimeout"');
}, 2000);

// Ejemplo con "setTimeout" y sus argumentos
function gretting(name){                        // Función que enviaremos al "setTimeout"
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, "Oscar");            // Enviamos los argumentos que usará la función que ingresamos al "setTimeout"



// Solución al ejercicio de "PlayGrounds"
export function execCallback(callback) {
    window.setTimeout(
      callback, 2000);                          // Recuerda no ejecutar la función cuando la coloques de argumento en el "setTimeOut"
    }

    
    
// Forma de ejecutar la solución al ejercicio
export function execCallback(callback) {
    window.setTimeout(callback, 2000);
  }
  
  function greetings() {
    console.log('Hola platzi');
  }
  
  execCallback(greetings);