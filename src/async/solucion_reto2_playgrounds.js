// Solución al reto de PlayGrounds
export async function runCode(url) {
  if (url.substring(0, 8) != "https://") throw new Error('Invalid URL');            // Verifico que la url comience con "https://" y uso método ".substring(0,8)"

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something was wrong');
  }

}
 


// Solución 2, enviando solicitud con parámetro "options" con atributo "GET"
export async function runCode(url) {
  const option = {
    method: "GET"
  }
  if (url.substring(0, 8) != "https://") throw new Error('Invalid URL');

  try {
    const response = await fetch(url, option);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something was wrong');
  }

}



// Solución 3, verificando "url" usando "new URL(url)"
export async function runCode(url) {
  try {                                               // Validar formato correcto url
    new URL(url);                                     // Puedo validar que sea una URL al crear un objeto de tipo URL
  } catch (e) {
    throw new Error('Invalid URL');
  }
  try {                                               // Validar que exista url
    const response = await fetch(url)
    return response.json();   
  } catch (e) {
    throw new Error('Something was wrong');
  }
}



// Solución 4, usando "url.substring(0, 8) != 'https://'"
export async function runCode(url) {
  if (url.substring(0, 8) != "https://") {
    throw new Error('Invalid URL');
  }
  else {
    try {

      const response = await fetch(url);
      const data = await response.json();
      return data;


    } catch {
      throw new Error('Something was wrong');
    }
  }
}



// Solución 5, mandando como parámetro Objeto "option"
export async function runCode(url) {
  const options = {
    method: "GET"
  }

  try {
    new URL(url)
  } catch (error) {
    throw new Error('Invalid URL');
  }

  try { 
    const response = await fetch(url, options);
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Something was wrong');
  }
}



// Solución 6, usando "ReGex" (Regular Expressions) para validar el formato de la URL
export async function runCode(url) {
  // Tu código aquí 👈
  const options = {
    method: 'GET'
  };
  const reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  if (!url.match(reg)) {
    throw new Error("Invalid URL");
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();  
    return data;
  } catch (error) {
    throw new Error("Something was wrong");
  }
}