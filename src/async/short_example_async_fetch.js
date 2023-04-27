// Consumo la API de Jsonplaceholder y sus usuarios, forma corta

const getUsers = async function() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const json = await response.json()

  return json
}


// Call the getUsers function and log the response
getUsers().then(response => console.log(response))