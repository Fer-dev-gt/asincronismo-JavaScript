// Ahora vamos a agregar un nuevo producto a la API de Platzi
import fetch from 'node-fetch';                                               // Importamos la lógica necesaria para hacer la solicitud a la API
const API = 'https://api.escuelajs.co/api/v1';                                // Hacemos el llamado a nuestra API y lo guardamos en una variable constante (en mayusculas) (Encontré la url en documentación de Platzi)

function postData(urlApi, dataNewProduct) {                                   // Función para agregar nueva información a la lista de Objetos de los productos, tiene 2 parámetros, la URL de la API que vamos a usar y los datos (en formato de objeto) del nuevo producto que vamos a agregar
  const response = fetch(urlApi, {                                            // En la variable "response" guardamos el resultado de "fetch()" y dentro de "fetch()" mandamos la "urlApi" y un formato en tipo Objeto que le indica que queremos hacer un POST y no GET
    method: 'POST',                                                           // El tipo de método que va a imprementar va a ser "POST" ("Put es para actualizar")
    mode: 'cors',                                                             // El "mode" tiene que ver con los permisos que va a tener y por defecto siempre va a estar en "cors"
    credentials: 'same-origin',                                               // "credentials" por defecto sera 'same-origin' (Si no hay ninguna autenticación pues no esta pasando nada)
    headers: {                                                                // "headers" son las cabeceras que vamos a enviar en la solicitud para que nos reconozca
      'Content-Type': 'application/json'                                      // Vamos a usar 'Content-Type' para decirle que los datos que estamos enviando son de "aplication/JSON"
    },
    body: JSON.stringify(dataNewProduct)                                      // El "body" es la información que yo quiero transmitir a esta API usando "JSON:stringigy()" ya que la info la estoy recibiendo como un Objeto y la quiero enviar como texto (la info viene del nuevo producto en la variable "dataNewProduct")
  });
  return response;                                                            // Retornamos nuestra variable "response" con la información de arriba
}


const dataNewProduct = {                                                      // Definimos una variable constante de el producto que vamos a añadir siguendo un formato de Objeto que esta definido en la API de Platzi, aqui puedo personalizar los valores de cada llave
  "title": "Zapatos del futuro",                                              // Nuevo Producto que YO agregué
  "price": 7777,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}


postData(`${API}/products`, dataNewProduct)                                   // Voy a invocar a mi función "postData()", mandamos como argumento la URL de la API con los producto, y la data del producto a agregar, (Nos va a devolver el valor de una Promesa)
  .then(response => response.json())                                          // La respuesta de la función de arriba (de una Promesa) la tranformamos a formato JSON
  .then(data => console.log(data))                                            // Despues mostramos la información (data) que nos regreso esta Promesa
  .then(() =>                                                                 // Muesto un mensaje personalizado indicando que se realizó el proceso con éxito
  console.log(`Felicidades, se agregó un nuevo producto (${dataNewProduct.title})🎉`))      