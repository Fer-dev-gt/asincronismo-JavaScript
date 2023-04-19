// Ejemplo de una promesa
const cows = 15;
const countCows = new Promise(function(resolve, reject) {
    /*
		Se llama a 'resolve' solo si el número de vacas supera 10,
	  de lo contrario se llama a 'reject'
	*/
	if(cows > 10){
		resolve(`Tenemos ${cows} vacas en la granja`);
	} else {
		reject("No tenemos las suficientes vacas en la granja");
	}
});

/*
	Con '.then' se obtiene el resultado de la promesa de acuerdo a resolve o reject
	Con '.catch' se obtene más información de un futuro error que se presente
	Con '.finally' se puede indicar con un mensaje que ya se ejecutó la promesa (opcional))
*/
countCows
	.then((result) =>	console.log(result))
	.catch((err) => console.error(err))
	.finally(() => console.log('Finally promise'))







// Ejemplo del uso de "Fetch" con package.json
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

/*
	Recibe como parametro la URL que queremos llamar y
	esto retornará el llamado de fecth: Una promesa
*/
function fetchData(urlApi) {
	return fetch(urlApi);
};

fetchData(`${API}/products`)
	.then((response) => response.json()) // Se hace la conversión a formato JSON
	.then(products => {
    console.log(products);
		// Solo mostrara el primer elemento de los productos
		return fetchData(`${API}/products/${products[0].id}`)
	})
	.then(response => response.json()) // Se vuelve traer la data
	.then(product => {
    console.log(products.title);
		// Solo mostrara la categoria de un producto en particular
		return fetchData(`${API}/categories/${product.category.id}`)
	})
	.then(response => response.json()) // Se vuelve traer la data
	.then(category => {
    console.log(category.name);
	})
	.catch((error) => console.log(error));
	.finally(() => console.log('Finally promise'))










// Ejemplo de Async y Await
const fnAsync = () =>{
    return new Promise((resolve, reject) =>{
      (true)
        ? setTimeout(() => resolve('Async!!', 2000))
        : reject(new Error('Error!')); 
    });
  }
  
  // La palabra 'async' es para el cuerpo de la función
  const anotherFn = async () => {
    // La palabra 'await' estará dentro de la lógica a implementar
    const something = await fnAsync(); // Aquí nos está regresando una promesa
    console.log(something); // Se imprime mientras se espera
    console.log('Finally!');
  }
  
  // Al ser la primera orden con solo console.log, 'Before' se imprime primero
  console.log('Before');
  /*
      Es el segundo en llamar, pero aún así no se imprimen los console de su lógica 
      y tarda 2 s en ser ejecutada
  */
  anotherFn();
  /*
      Aparece justo después de 'Before' porque anotherFn() está esperando una promesa
      y aún así el programa no se detiene, sino que sigue y así tenemos 'After' de 
      segundo al imprimir
  */
  console.log('After')
  
  
  /* La salida al correr con Run Code queda:
      Before
      After
      Async!!
      Finally!
  */


    // Forma de aplicar lo de arriba con un try/catch
    const anotherFunction = async (url_api) => {
        try {
              // Code executed
        } catch (error){
              // Code of error
        }
      }








// Ejemplo de "Generators"
// Declaración de la función del Generador
function* gen(){
	yield 1;
	yield 2;
	yield 3;
}

// Expresión de la función Generadora
const g = gen();

// Llamada del método next en el objeto del Generador
//console.log(g.next()); // Imprime el primer yield: {value: 1, done: false}

// Llamada del métodonext en el objeto del Generador
console.log(g.next().value); // Imprime el primer yield: 1
console.log(g.next().value); // Imprime el segundo yield: 2
console.log(g.next().value); // Imprime el tercer yield: 3
console.log(g.next().value); // Si se coloca un cuarto console, la consola indica "Undefined"











// Ejemplos de Peticiones a APIs usando Callbacks
// Llamado a la libreria XmlHttpRequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// API en mayúscula porque es una referencia que no va a cambiar
const API = 'https://api.escuelajs.co/api/v1';

// urlApi: no confundir y colocar 'API'
function fetchData(urlApi, callback){
	// Referencia a 'new XMLHttpRequest'
	let xhttp = new XMLHttpRequest();

	// Petición "obtener" = Protocolo "GET", con 'true' para habilitarlo
	xhttp.open('GET', urlApi, true);
	// Observa diferentes estados de la solicitud y conoce cuando está disponible la información
	xhttp.onreadystatechange = function(event) {
		// Verificar el estado, si ha sido completada la llamada
		if(xhttp.readyState === 4) {
			// Validar si el servidor responde de forma correcta
			if(xhttp.status === 200 ) {
				/* 
					El servidor envia los datos en formato de texto a 'xhttp.responseText',
					se debe hacer la transformación a formato JSON
				*/
				callback(null, JSON.parse(xhttp.responseText));
			} else {
				const error = new Error('Error' + urlApi);
				// Es null porque no se está regresando ningún dato
				return callback(error, null);
			}
		}
	}
	xhttp.send();
}
/*
	Como argumentos pasamos la url 'API' concatenada con la cadena '/products' para acceder a
	la URL de la API deseada y una función anónima que recibe 2 parámetros (un objeto de error
	y un arreglo que almacena todos los objetos traídos por la API).
*/
fetchData(`${API}/products`, function (error1, data1) {
  // Se valida si existe un error, en caso de que exista la funcion retorna el error
  if (error1) return console.error(error1);
  /*
		Se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del
		arreglo data1, se envía como parámetros la url de la API apuntando al atributo del primer 
		objeto de arreglo data1 y nuevamente una función anónima.
	*/
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    // Si en este punto se identifica un error se imprime en consola y se detiene el proceso
    if (error2) return console.error(error2);
    /*
			Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, se envían
			como parámetros la url de la API con la concatenación de 'Categories' y el atributo Id de
			categoria del objeto data2 de la función anterior.
			En este caso puntual se hace uso de Optional Canning el cual hace una evaluación de las
			propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la
			propiedad no exista o sea null.
			Igual que las anteriores se envía una funcion anónima con 2 argumentos, un objeto Error y
			un objeto de datos.
		*/
    fetchData(
      `${API}/categories/${data2?.category?.id}`,
      function (error3, data3) {
        //se valida si existe error, en caso de que exista se detiene el proceso y se imprime el error
        if (error3) return console.error(error3);
        //Se imprime el objeto en la posición 1 del arreglo de los objetos obtenidos en el método invocado inicialmente
        console.log(data1[0]);
        //Se imprime el titulo del objeto que se consultó en la segunda invocación de la función
        console.log(data2.title);
        //Se imprime el nombre de la categoria a la que pertenece el objeto que se consultó en la segunda invocación del método.
        console.log(data3.name);
      }
    );
  });
});