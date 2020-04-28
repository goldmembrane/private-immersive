// Refactor functions below, if you need to
const add = (num1, num2) => {
  return num1 + num2;
};

const substract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  if ( num2 === 0 ) {
    return 'cannot divide something with 0';
  }
  return num1 / num2;
};

module.exports = {
  add,
  substract,
  multiply,
  divide
};

<<<<<<< HEAD


=======
>>>>>>> 1825630d214f2c34d3cabc78b97242c36c81bfc3
console.log("disable eslint on this line");