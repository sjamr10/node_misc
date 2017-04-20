var a = "hello world";
var b = 3.14159;


console.log(a.length);  // 11
console.log(a.toUpperCase());		// "HELLO WORLD"
console.log(b.toFixed(4));			// "3.1416

var a = "42";

var b = Number(a);

console.log(a);				// "42"
console.log(b); 			// 42 -- the number!

var a = "42";

var b = a / 2;	// "42" implicitly coerced to 42 here

console.log(a);				// "42"
console.log(b);				// 21 -- the number!

if ("Hola") {
  console.log("Hola")
}

var a = "42";
var b = 42;

console.log(a == b);			// true
console.log(a === b);		// false
