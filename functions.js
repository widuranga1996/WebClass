// Example of a simple function:

function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("John"); // Output: Hello, John!
  

//   Functions can also have a return statement to send a value back to the caller:

// function add(a, b) {
//     return a + b;
//   }
  
//   let sum = add(3, 5);
//   console.log(sum); // Output: 8


// Example of using an anonymous function in a higher-order function (map):

// const numbers = [1, 2, 3, 4];
// const squaredNumbers = numbers.map(function(num) {
//   return num * num;
// });

// console.log(squaredNumbers); // Output: [1, 4, 9, 16]

// Arrow Functions (ES6):

// const cube = (x) => {
//     return x * x * x;
//   };

// console.log(cube(2));

// When the function has only one expression, the curly braces and return keyword can be omitted:

// const cube = x => x * x * x;

// console.log(cube(2));