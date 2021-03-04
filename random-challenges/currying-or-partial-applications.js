function greeter(greeting) {
    return function (greetee) {
      console.log(greeting + ", " + greetee + "!");
    }
  } 

console.log(greeter("Hello")("Hi"));

Callbacks are essentially a synonym for "passing a function to a function" 
(i.e. higher-order function that consumes a function); currying is a form of
partial application, i.e. a function which isn't passed all of the parameters
it expects returns a new function that only expects the free parameters.