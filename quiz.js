// Using literals
let booleanVarliteral = false;
let numberVarliteral = 13;
let bigintVarliteral = 78890054740991n; 
let undefinedVarliteral = undefined;

// Using constructor functions
let booleanVarConstructor = new Boolean(true); // Using Boolean constructor
let numberVarConstructor = new Number(34); // Using Number constructor
let bigintVarConstructor = BigInt("0634000009234567890"); // Using BigInt constructor
let undefinedVarConstructor = new Object(); // Using Object constructor and assigning undefined later

// Displaying the values
console.log("booleanVarliteral:", booleanVarliteral);
console.log("numberVarliteral:", numberVarliteral);
console.log("bigintVarliteral:", bigintVarliteral);
console.log("undefinedVarliteral:", undefinedVarliteral);

console.log("booleanVarConstructor:", booleanVarConstructor.valueOf());
console.log("numberVarConstructor:", numberVarConstructor.valueOf());
console.log("bigintVarConstructor:", bigintVarConstructor.toString());
console.log("undefinedVarConstructor:", undefinedVarConstructor.undefinedProperty); // undefined