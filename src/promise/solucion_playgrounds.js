// Solución al ejercicio de "Playgrounds"
export function delay(time, message) {
  return new Promise(function (resolve, reject) {
    window.setTimeout(function(){
      resolve(message);
    }, time);
 });
}


// Misma solución pero usando "Arrow Functions"
export function delay(time, message){
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(message);
    }, time);
  });
}


// Misma solución pero usando "Arrow Functions" y con validando que el tiempo no sea negativo
export function delay(time, message) {
  return new Promise((resolve, reject) => {
    if(time > 0) {
      window.setTimeout(() => {
        resolve(message);
      }, time);
    } else {
      reject('El tiempo no puede ser negativo');
    }
  });
}

// Solución de un compañero
export function delay(time, message) {
  return new Promise((resuelve, rechaza) => {
    if (true) {
      window.setTimeout(() => resuelve(message), time)
      /*así no: window.setTimeout(resuelve(message), time)*/
    }
  })
}


// Solución de un compañero, con verificación
export function delay(time, message) {
  const pro = new Promise(function (resolve, reject) {
    if (time >= 0) {
      window.setTimeout(() => {
        resolve(message)
      }, time)
    } else {
      reject("Time cannot be negative")
    }
  })
  return pro
}
