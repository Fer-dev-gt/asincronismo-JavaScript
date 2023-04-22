// Haremos el mismo ejercicio pero usando Promesas para obtener información de los productos de la API
import fetch from 'node-fetch';                                       // Importamos la lógica necesaria para hacer la solicitud a la API
const API = 'https://api.escuelajs.co/api/v1';                        // Hacemos el llamado a nuestra API y lo guardamos en una variable constante (en mayusculas) (Encontré la url en documentación de Platzi)

// "fetch()" devuelve una "Promesa"
function fetchData(urlApi) {                                          // Función que recibe la API que queremos llamar y retorna el llamdo consecuente de "fetch" (La cual por defecto es una Promesa y nos permite usar ".then() .catch() etc" y hacer multiples solicitudes)
  return fetch(urlApi);                                               // Invocamos la función que importamos para que realize el "fetch" (búsqueda)
};


fetchData(`${API}/products`)                                          // Invocamos nuestra función "fetchData" y le mandamos como argumento la URL deseado "${API}/products". Al ser una promesa podemos inmediatamente usar ".then()" para saber que hay en su respuesta y para aplicar la lógica deseada
  .then(response => response.json())                                  // Usando una "Arrow Function" transforma mi variable "response" a formata JSON convirtiendo la información a un Objeto
  .then(products => {                                                 // Despues quiero mostrar mis productos con un console.log, para eso uso como argumento a la lista de productos que me devolvio la petición "products"
    console.log(products);                                            // Imprimimos la lista de productos (Son muchisimos)
  })  
  .then(() => {                                                       // Podemos "anidar" múltiples ".then()" y usar funciones o Arrow Function que no tengan parametros
    console.log('hola este mensaje viene desde una promesa');
  })
  .catch(error => console.log(error));                                // En dado caso de recibir un error utilizamos la palabra reservada ".catch" y usando un Arrow Function imprimos la información de dicho error




// Ahora vamos a hacer varios llamados a "fetchData" y retornar el llamado nuevamente de "fetchData" y traer su información
fetchData(`${API}/products`)                                          // Invocamos nuestra función "fetchData" y le mandamos como argumento la URL deseado "${API}/products". Al ser una promesa podemos inmediatamente usar ".then()" para saber que hay en su respuesta y para aplicar la lógica deseada
  .then(response => response.json())                                  // El valor de "response" es lo que devuelve la solicitud de arriba de "fetchData" . Esta intrucción me permite transformar la información que estamos recibiendo a un Objeto con formato JSON
  .then(products => {                                                 // En esta "Arrow Function" mandamos como argumento la lista de productos "products"
    console.log(products);                                            // Imprimo la lista de objetos con la información de mis productos
    return fetchData(`${API}/products/${products[0].id}`)             // Retornamos nuevamente el uso de "fetchData()" pero ahora haciendo el llamado de la segunda petición la cual es la "id" del primer producto de la lista "products"
  })
  .then(response => response.json())                                  // Hacemos otro ".then()" para traer esa otra Data en formato JSON
  .then(product => {                                                  // En el "Arrow Function" enviemos de nuevo nuestra lista de "products"
    console.log(product.title);                                       // Imprimimos el "product.title" de la información que nos retornaron en el ultimo uso de "fetchData"
    return fetchData(`${API}/categories/${product.category.id}`)      // Hacemos otra petición a "fetchData" y la retornamos pasandole el argumento con la URL de la categoria que queremos utilizar por "id"
  })
  .then(response => response.json())                                  // El valor de respuesta de arriba la guardo en "response" y la convieto a JSON para poderla leer
  .then(category => {                                                 // Con esa informacion podemos mostra la información de "category"
    console.log(category.name);                                       // Imprimimos el valor de "category.name" el id que no retornaron arriba en el ultimo "fetchData"
  })
  .catch(error => console.log(error))                                 // En dado caso de recibir un error utilizamos la palabra reservada ".catch" y usando un Arrow Function imprimos la información de dicho error
  .finally(() => console.log('Finally: se acabo el proceso'))         // Opcionalmente usamos ".finally()" para mostrar un mensaje cuando se termine de ejecutar nuestra promesa