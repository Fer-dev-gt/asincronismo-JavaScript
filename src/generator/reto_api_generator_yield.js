import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}


async function* iterData(urlApi) {
  try {
    const products = await fetchData(`${urlApi}/products`);
    yield console.log(products[3]);

    const product = await fetchData(`${urlApi}/products/${products[3].id}`)
    yield console.log(product.title);

    const category = await fetchData(`${urlApi}/categories/${product.category.id}`)
    yield console.log(category.name);
    
  } catch (error) {
    console.error('Error', error);
  };
};

const iteracion = iterData(API);
iteracion.next();
iteracion.next();
iteracion.next();