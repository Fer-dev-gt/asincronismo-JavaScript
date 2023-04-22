import fetch from 'node-fetch';                                         // Importamos la lógica necesaria para hacer la solicitud a la API
const API = 'https://api.escuelajs.co/api/v1';                          // Hacemos el llamado a nuestra API y lo guardamos en una variable constante (en mayusculas) (Encontré la url en documentación de Platzi)

async function fetchData(urlApi) {                                      // Aplicamos "async" a la declaración de la función "fetchData" la cual tiene como parámetro la variable "urlApi", nos retorna la información convertida en un Objeto
  const response = await fetch(urlApi);                                 // Utilizamos "await" al método "fetch(urlApi)" la cual utiliza Promesas y guardamos la respuesta en la variable "response"
  const data = await response.json();                                   // Otra vez usamos "await" ahora va dirigido a la trasformación de la variable "response" a formato JSON y luego lo guardamos en la variable "data"
  return data;                                                          // Retornamos la variable "data" que contiene la información que hemos traido desde la API, la API que estamos "consumiendo"
}


const anotherFunction = async (urlApi) => {                             // Esta función se encarga de hacer todas la solicitudes en este caso a todos los productos, un produncto en particular y a la categoría de este producto. Esta funciónt es un "Arrow Function" con el uso de "async" que lo vuelve Asincrono, de parámetro tiene la "urlApi" de la info que buscamos
  try {                                                                 // Usamos un bloque "try/catch" en donde colocamos toda la lógica que queremos que tenga la función y en caso de que exista un error ejecutamos otra lógica (En el caso de alguna de nuestras Promesas llegue en un "reject"). Utiliza "Lógica Consecuente"
    const products = await fetchData(`${urlApi}/products`);                             // Hacemos la primer llamada/solicitud usando el método "fetch(url)" y siguiendo la lógica de Promesas (que es la espera a la solicitud que estamos haciendo) usamos la palabra reservada "await", nos duelvuelve una lista de todos los productos disponible en formato JSON la cual guardo en la variable "products", consumimos la api con todos los productos 
    const product = await fetchData (`${urlApi}/products/${products[0].id}`);           // Hacemos la segunda llamada que va dirigida a un producto en particular la cual guardamos en la variable "product", igualmente usamos "await" para indicar la espera a la solicitud que estamos haciendo. Usamos "fetchData(url)" con una URL que apunta al "id" de un producto en particular de la lista "products", traemos el objeto de un solo producto (revisar doc para la api)
    const category = await fetchData (`${urlApi}/categories/${product.category.id}`);   // Hago la tercera solicitud que va dirigida a la categoría del producto que escogí, nuevamente usamos "await" y dentro del "fetchData" usamos la URL con la "category" de la variable de arriba "product"

    console.log(products);                             // Imprimo la lista de todos mis productos (en formato JSON)     
    console.log(product.title);                        // Imprimo el "title" de un producto en especifico (el que solicité en la segunda petición)  
    console.log(category.name);                        // Imprimo el nombre de la categoría del producto anterior
    
  } catch (error) {                                    // Esto se ejecuta si hay un error de sintaxis o si alguna de nuestras Promesas devuelve un "reject( )", le pasamos como parámetro la información del error la cual esta en la variable "error"
    console.error(error);                              // Imprimo la información del posible error
  }
}


anotherFunction(API);                                   // Invoco a mi función principal la cual tiene integrada la lógic a de "async/await" con Promesas