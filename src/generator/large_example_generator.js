// Define a function named asyncAlt that takes a generator function as an argument
function asyncAlt(generatorFunction) {
  // Return a function
  return function() {
    // Create and assign the generator object
    const generator = generatorFunction()

    // Define a function that accepts the next iteration of the generator
    function resolve(next) {
      // If the generator is closed and there are no more values to yield,
      // resolve the last value
      if (next.done) {
        return Promise.resolve(next.value)
      }

      // If there are still values to yield, they are promises and
      // must be resolved.
      return Promise.resolve(next.value).then(response => {
        return resolve(generator.next(response))
      })
    }

    // Begin resolving promises
    return resolve(generator.next())
  }
}