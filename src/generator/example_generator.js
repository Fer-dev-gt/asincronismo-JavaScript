// Primer ejemplo de una función "Generator"
function* generador() {                                 // Al usar la estructura "function*" estamos creando la estructura de un "generator" que nos permite iterar y darle pausa segun lo necesitemos
  yield 1;                                              // El "yieal" es como un "step" y nos devuelve un valor diferente por cada iteración/invocación de la funciont "generator"
  yield 2;                                              // Se imprime en la segunda iteración, será un número 2
  yield 3;                                              // Podemos mandar cualquier cantidad de "yield"
  yield "último yield"                                  // También podemos retornar valores tipo String
}

const generados = generador();                          // Expresión de la función "Generator" la cual la guardamos en la variable "g". Con esta lógica ahora tenemos acceso a la palabra reservada ".next()"
console.log(generados.next().value);                    // Cuando usamos solo ".next()" nos devuelve más información en formato de Objeto, ahora si le agregamos ".value()" no devolverá solamente el valor que retorna el "yield" en este caso al ser la primer iteración sera 1
console.log(generados.next().value);                    // Segunda iteración, imprimira 2
console.log(generados.next().value);                    // Tercera iteración, imprime 3
console.log(generados.next().value);                    // Cuarta iteracación, imprime un String



// Segundo ejemplo de una "Generator Function"
function* iterar(array) {                               // Esta "Generator Function" será más dinamica ya que hará "yield" por cada uno de los elementos de un Array que recibe como parámetro
  for (let value of array) {                            // Iteramos con la estructura "for of" para recorrer el Array, con la variable "value" que toma el valor de cada elemento dentro del Array
    yield value;                                        // Retorna los valores dentro del Array usando la lógica de "yield"
  }
}

const iterado = iterar(['oscar','omar','ana','lucia','juan']);      // Generamos una variable constante "iterado" la cual guardará la expresión de la función "Generator" y nos da la información si usamos ".next()" y ".value()"
console.log(iterado.next().value);                                  // Al usar ".next().value()" nos devuelve el valor del primer elemento del Array que mandamos, en este caso 'Oscar'
console.log(iterado.next().value);                                  // Imprime 'omar'
console.log(iterado.next().value);                                  // Imprime 'ana'
console.log(iterado.next().value);                                  // Imprime 'lucia'
console.log(iterado.next().value);                                  // Imprime 'juan'
console.log(iterado.next().value);                                  // OJO: cuando ya no existen más elementos dentro del array o cuando tenemos más "yield" no devolvera un "undefined´"