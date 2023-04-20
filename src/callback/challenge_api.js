const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;    // Llamamos "xmlhttprequest" para imprementar los recursos npm y los guardamos en una variable (Importamos el módulo) y le implementamos el método ".XMLHttpRequest"
const API = 'https://api.escuelajs.co/api/v1';                      // Hacemos el llamado a nuestra API y lo guardamos en una variable constante (en mayusculas) (Encontré la url en documentación de Plat  zi)
    
function fetchData(urlApi, callback){                               // Recibe la "url" (el API que tenemos y el Callback (función anónima) para recibir la solicitud del llamado de esta API)(El parámetro ‘urlApi’ hace referencia a cualquier API con la cuál estemos trabajando, en este caso la FakeStore de Platzi.) para poder controlar el flujo de información de la API.
  let xhttp = new XMLHttpRequest();                                 // Para poder manipular las solicitudes que haremos para consultar los datos guardamos en una varible el objeto XMR y luego usaremos métodos sobre esa variable, (Utilizamos un Constructor vacío "new XMLHttpRequest()"), "xttps" es un objeto

  xhttp.open('GET', urlApi, true);                                  // Usando el método "open()" podemos abrir una solicitud (un request) hacer una conexión, el primer parámetro es el tipo de solicitud que vamos a realizar, en este caso "GET", El segundo parámetro es la url de la API a la cuál le vamos a realizar el request y tercer parámetro recibe un booleano para indicarle si vamos a utilizar asíncronismo o no, tal simple como TRUE o FALSE según el caso.

  xhttp.onreadystatechange = function (event){                      // Vamos a hacer una función anónima para verificar que el request de los datos ha salido con éxito y en caso de tener un error hacer registro de éste, Para ello nos vamos a apoyar de la propiedad de ‘.onreadystatechange’ ésta llamará a la función cada que el "readyState" cambie ("readyState" retorna el número del estado en dónde se encuentra el request)
    if (xhttp.readyState === 4) {                                   // Según el ciclo de vida del "readyState" para saber que la operación ha sido completada debemos validar que "xttps.readyState" sea igual a 4 (ver tabla de referencias y códigos) 
      if (xhttp.status === 200) {                                   // Una vez completado con éxito necesitamos saber que tipo de respuesta nos entregó el servidor, así que volvemos a verificar con un ’if’ la propiedad ‘xttps.status’ según el tipo de respuestas en este caso queremos un 200 que significa "succesful responses"
        callback(null, JSON.parse(xhttp.responseText));             // ¡Ya comprobamos que tanto el "request" como el response hayan sido exitosos! Ahora podemos invocar nuestro "callback" (función por definir más tarde para manipular los datos). Este Callback recibe 2 parámetros (El primero vamos a utilizarlo en caso de que se presente un error, pero como ya hemos verificado eso podemos simplemente dejarlo como un ‘null’.) En el segundo usamos la función ‘JSON.parse()’ para convertir en datos que podamos controlar el texto que nos retorna la propiedad ‘.responseText’ después de hacer el request.
      } else {                                                      // Utilizando la estructura de "else" para que en caso de haber un error registrarlo y enviarlo al "callback" (donde antes habiamos puesto ‘null’) y ahora pasar el "null" en la parte de los datos, ya que nunca pudo consultarlos.
        const error = new Error('Error mensaje ' + urlApi);         // Definimos una variable constante "error" y le guardamos la instanciación de un nuevo "error" (Usando el formato de constructor "new Error()") con la variable "urlAPI"
        return callback(error, null);                               // Enviamos la informacion de la variable "error" que definimos y el valor "null" como argumentos a nuestra función Callback
      }                       
    }
  }
  xhttp.send();                                                     // Una vez ya acabada la función ya solo queda utilizar el método "xhttp.send()" para enviar el "request" al sever (API)
}




// Segundo Paso, hacer el llamado a la función "fetchData"
fetchData(`${API}/products`, function(error1, data1){                                 // El primer parámetro sera la variable "API" que se llamará "urlApi" y le concatenamos "/productos" en la función el segundo será nuestra función Callback
  if(error1) return console.error(error1);                                            // Si existe un error detengo la ejecución e imprimo la información del error
  fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){                // Dentro de la función "fetchData" voy a volver a llamar a "fetchData" con otra logica consuecuente de obtener la información 
    if(error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
      if(error3) return console.error(error3);
      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
  });                                    
});