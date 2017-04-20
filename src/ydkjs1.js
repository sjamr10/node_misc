var a;
var type;

type = typeof a;
console.log(type);				// "undefined"

a = "hello world";
type = typeof a;
console.log(type);			// "string"

a = 42;
type = typeof a;
console.log(type);				// "number"

a = true;
type = typeof a;
console.log(type);				// "boolean"

a = null;
type = typeof a;
console.log(type);				// "object" -- weird, bug

a = undefined;
type = typeof a;
console.log(type);				// "undefined"

a = { b: "c" };
type = typeof a;
console.log(type);				// "object"

console.log();


var obj = {
	a: "hello world",
	b: 42,
	c: true
};

var propertyValue = obj.a;
console.log(propertyValue);

propertyValue = obj.b;
console.log(propertyValue);

propertyValue = obj.c;
console.log(propertyValue);

propertyValue = obj["a"];
console.log(propertyValue);

propertyValue = obj["b"];
console.log(propertyValue);

propertyValue = obj["c"];
console.log(propertyValue);

console.log();


var arr = [
	"hello world",
	42,
	true
];

var elementValue = arr[0];			// "hello world"
console.log(elementValue);

elementValue = arr[1]; // 42
console.log(elementValue);

elementValue = arr[2]; // true
console.log(elementValue);

var arrayLength = arr.length; // 3
console.log(arrayLength);

type = typeof arr;		// "object"
console.log(type);

console.log();


var objectArr = {
  1: "asdasd"
};

console.log(objectArr[1]);

console.log();


function foo() {
	return 42;
}

foo.bar = "hello world";

type = typeof foo;			// "function"
console.log(type);

type = typeof foo();		// "number"
console.log(type);

type = typeof foo.bar;		// "string"
console.log(type);

console.log();
