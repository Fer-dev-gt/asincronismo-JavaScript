
// Primera solución al reto PlayGrounds
export async function runCode() {
  const url = 'https://domain-api-com';
  try {
    const response = await fetch(url)
    return response;
  } catch {
    throw new Error('API Not Found');
  }
}


// Solución más corta 
export async function runCode() {
  const url = 'https://domain-api-com';
  try {
    return await fetch(url)
  } catch {
    throw new Error('API Not Found');
  }
}
