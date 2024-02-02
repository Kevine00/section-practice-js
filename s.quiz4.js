let resNumber = 1 + 2;
console.log(typeof resNumber); 

//string
let resString = "welcome" + "home";
console.log(typeof resString);  

//boolean
let resBoolean = true + false;
console.log(typeof resBoolean);  // Output: number (true is treated as 1, and false as 0 in numeric operations)

//BigInt
let resBigInt = BigInt(56) + BigInt(320);
console.log(typeof resBigInt);  // Output: bigint

//Undefined
let resUndefined = undefined + undefined;
console.log(typeof resUndefined);  

//null
let resNull = null + null;
console.log(typeof resNull);  // Output: 0 (null is treated as 0 in numeric operations)
