
function add(x, y) {
    return x + y;
  }
  

  function subtract(x, y) {
    return x - y;
  }
  
  
  function multiply(x, y) {
    return x * y;
  }

  function divide(x, y) {
    if (y !== 0) {
      return x / y;
    } else {
      return "Cannot divide by zero";
    }
  }
  
  let num1 = 30;
  let num2 = 10;
  
  console.log(`Addition: ${add(num1, num2)}`);
  console.log(`Subtraction: ${subtract(num1, num2)}`);
  console.log(`Multiplication: ${multiply(num1, num2)}`);
  console.log(`Division: ${divide(num1, num2)}`);
  