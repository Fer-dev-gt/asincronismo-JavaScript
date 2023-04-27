// Consumo la API de Jsonplaceholder y sus usuarios, forma cortag
const getUsers = asyncAlt(function*() {
  const response = yield fetch('https://jsonplaceholder.typicode.com/users')
  const json = yield response.json()

  return json
})


// Invoking the function
getUsers().then(response => console.log(response))



