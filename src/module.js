
myFunction16();

function myFunction16() {
  var sales = 'Toyota';

  function carTypes(name) {
    if (name === 'Honda') {
      return name;
    } else {
      return "Sorry, we don't sell " + name + ".";
    }
  }

  var car = {myCar: 'Saturn', getCar: carTypes('Honda'), special: sales};
  var person = {name: 'Juan', gender: 'male', age: 15};
  console.log(person.name);

  // String interpolation
  var name = "Bob", time = "today";
  `Hello ${name}, how are you ${time}?`

  function f(x, ...y) {
    // y is an Array
    return x * y.length;
  }

  f(3, "hello", true) == 6

  function f(x, y, z) {
    return x + y + z;
  }

  // Pass each elem of array as argument
  f(...[1,2,3]) == 6
}

class Person {
  constructor(name, gender) {
    this._id = 1;
    this._name = name;
    this._gender = gender;
  }

  get gender() {
    return this._gender;
  }

  get name() {
    return this._name;
  }

  set gender(gender) {
    this._gender = gender;
  }

  set name(name) {
    this._name = name;
  }

  walk() {
    console.log(this._name + ' is walking.');
  }

  static getNumber() {
    return 2;
  }
}

function myFunction15() {
  var person = new Person("Sergio", "male");
  console.log(person.name);
  person.walk();

  evens = [2, 4, 6, 8];

  // Expression bodies
  var odds = evens.map(v => v + 1);
  var nums = evens.map((v, i) => v + i);
  var pairs = evens.map(v => ({even: v, odd: v + 1}));

  fives = [];

  // Statement bodies
  nums.forEach(v => {
    if (v % 5 === 0)
      fives.push(v);
  });

  // Lexical this
  var bob = {
    _name: "Bob",
    _friends: ["Jhon", "Kevin", "Jason"],
    printFriends() {
      this._friends.forEach(f =>
        console.log(this._name + " knows " + f));
    }
  }

  bob.printFriends();

  var f = () => {
    console.log("Hola"); // |this| properly refers to the person object
  }

  f();
}

function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

function myFunction14() {
    var cars = ["Saab", "Volvo", "BMW"];
    var cars = [    // Spaces and line breaks are not important. A declaration can span multiple lines
        "Saab",
        "Volvo",
        "BMW"
    ];
    var cars = new Array("Saab", "Volvo", "BMW");
    /* For simplicity, readability and execution speed,
     * use the first one (the array literal method). */
    var name = cars[0];
    cars[0] = "Opel";
    var myArray = [];
    myArray[0] = Date.now;
    myArray[1] = myFunction14;
    myArray[2] = cars;
    var person = ["John", "Doe", 46];
    var person = {firstName:"John", lastName:"Doe", age:46};
    var x = cars.length;    // The length property returns the number of elements in cars
    var y = cars.sort();    // The sort() method sort cars in alphabetical order
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Lemon");                // adds a new element (Lemon) to fruits
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits[fruits.length] = "Lemon";     // adds a new element (Lemon) to fruits
    var index, text = "";
    for (index = 0; index < fruits.length; index++) {
        text += fruits[index] + " ";
    }
    console.log(text);
    console.log(typeof fruits);
    console.log(fruits.valueOf());
    console.log(fruits.toString());
    console.log(fruits.join(" * "));
}

function myFunction13() {
    var d = new Date("1989/11/20");
    console.log(d.getTime());
    console.log(d.getDate());
    console.log(d.getDay());
    console.log(d.getHours());
    console.log(d.getFullYear());
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log(days[d.getDay()]);
    d.setFullYear(2020, 0, 14);
    console.log(d);
    d.setDate(20);
    console.log(d);
    d.setDate(d.getDate() + 50); // The setDate() method can also be used to add days to a date
    console.log(d);
    var msec = Date.parse("March 21, 2012");
    d = new Date(msec);
    console.log(d);
    var today, someday, text;
    today = new Date();
    someday = new Date();
    someday.setFullYear(2100, 0, 14);

    if (someday > today) {
            text = "Today is before January 14, 2100.";
    } else {
            text = "Today is after January 14, 2100.";
    }
    console.log(text);
}

function myFunction12() {
	var d = new Date();
	console.log(d);
	d = new Date("November 20, 2015 12:00:00");
	console.log(d);
	d = new Date(0);
	console.log(d);
	d = new Date(99,5,24,11,33,30,0);
	console.log(d);
	d = new Date(89,10,20);
	console.log(d);
  d = new Date("2015-03-25");
  console.log(d);
  d = new Date("2015-03");
  console.log(d);
  d = new Date("2015");
  console.log(d);
  d = new Date("2015-03-25T12:00:00");
  console.log(d);
  d = new Date("Mar 25 2015"); // Year, month and day can be in any order
  console.log(d);
  d = new Date("January 25 2015"); // And, month can be written in full (January), or abbreviated (Jan)
  console.log(d);
  d = new Date("Jan 25 2015");
  console.log(d);
  d = new Date("2015, JANUARY, 25");
  console.log(d);
  d = new Date("03/25/2015");
  console.log(d);
  d = new Date("03-25-2015");
  console.log(d);
  d = new Date("2015/03/25");
  console.log(d);
  d = new Date("Wed Mar 25 2015 09:56:24 GMT+0100 (W. Europe Standard Time)");
  console.log(d);
	console.log(d.toUTCString());
	console.log(d.toDateString());
}

function myFunction11() {
	Math.round(4.7);    // returns 5
	Math.round(4.4);    // returns 4
	Math.floor(4.7);	// returns 4
	console.log(Math.floor(Math.random() * 11));	// returns a random number between 0 and 10
	Math.E      // returns Euler's number
	Math.PI     // returns PI
	Math.SQRT2	// returns the square root of 2
	console.log(Math.abs(-2));
	console.log(Math.pow(2, 3));
}

function myFunction10() {
	var x = 123;
	x.toString();            			// returns 123 from variable x
	console.log((123).toString());      // returns 123 from literal 123
	(100 + 23).toString();   			// returns 123 from expression 100 + 23
	x = "10"
	Number(x);        					// returns 10
	parseInt("10");         			// returns 10
	parseInt("10.33");      			// returns 10
	parseInt("10 20 30");   			// returns 10
	parseInt("10 years");   			// returns 10
	parseInt("years 10");   			// returns NaN
}

function myFunction9() {
	var x = 34.00;    		// A number with decimals
	var y = 34;       		// A number without decimals
	var x = 123e5;    		// 12300000
	var y = 123e-5;   		// 0.00123
	var myNumber = 128;
	myNumber.toString(16);  // returns 80
	myNumber.toString(8);   // returns 200
	myNumber.toString(2);   // returns 10000000
	typeof Infinity;        // returns "number"
	var x = 100 / "10";     // x will be 10
	var x = 100 / "Apple";
	console.log(isNaN(x));  // returns true because x is Not a Number
	var x = 123;
	var y = new Number(123);
	var x = Number.MAX_VALUE;
	console.log(x);
}

function myFunction8() {
	var text = "Sergio";
	console.log(text.charAt(0));
	text = text.concat(" ", "Miranda")
	console.log(text);
	console.log(text.indexOf("g"));
	console.log(text.toUpperCase());
	console.log(text.replace("Sergio", "Juan"));
	var arrayVar = text.split("");
}

function myFunction7() {
	var text = "Sergio Miranda";
	console.log(text.length);
	console.log("123456789".length);
	text = "Very long string   asd as fasf asf df sdf sdf dsf sergio " +
		"asdasdasdasdasdasd asdf ds fd f sdf sdf";
	console.log(text);
	text = "Sergio";
	var stringObject = new String("Sergio");
	console.log(stringObject);
	console.log(text == stringObject);
	console.log(text === stringObject);
}

function myFunction6() {
	globalVar = "Global var"; // Automatically global variable
	console.log(globalVar);
	var notGlobalVar = "Not global var"
}

function myFunction5() {
	var person = {
		firstName:"Sergio",
		lastName:"Miranda",
		age:50,
		eyeColor:"brown",
		fullName:function() {return this.firstName + " " + this.lastName;}
	};
	console.log(person.firstName);
	console.log(person.fullName());
	console.log(person["lastName"]);
}

function myFunction4() {
	console.log(getProduct(2, 4));
	var func = getProduct;
	console.log(func(3, 10));
	console.log(func);
	var car = {type:"Fiat", model:500, color:"white"};
	console.log(car.type);
}

function getProduct(p1, p2) {
    return p1 * p2;               // The function returns the product of p1 and p2
}

function myFunction3() {
	typeof "John";                // Returns string
	typeof 3.14;                  // Returns number
	typeof false;                 // Returns boolean
	typeof [1, 2, 3, 4];          // Returns object
	typeof {name:'John', age:34}; // Returns object
	var person;                   // Value is undefined, type is undefined
	person = "Sergio";
	person = undefined;           // Value is undefined, type is undefined
	person = null;           	  // Value is null, but type is still an object
	typeof undefined;             // undefined
	typeof null;                  // object
	null === undefined;           // false
	null == undefined;            // true
	console.log("myFunction3");
}

function myFunction2() {
    var x = 10;
    x += 5;
    var length = 16;                               // Number
    var lastName = "Johnson";                      // String
    var cars = ["Saab", "Volvo", "BMW"];           // Array
    var x = {firstName:"John", lastName:"Doe"};    // Object
    process.stdout.write(x.firstName + ' ');
    for (var i = cars.length - 1; i >= 0; i--) {
            process.stdout.write(cars[i] + ' ');
    }
}

function myFunction1() {
    var y = 6;
    var z = x + y;
    var pi = 3.14;
    var person = "John Doe";
    var answer = 'Yes I am!';
    var x = 5 + 2 + 3;
    var palabra = "5" + 2 + 3;
    process.stdout.write(palabra + '\n');
}

function myFunction0() {
    var myFunction = function () {
        console.log(new Date());
    };
    setInterval(myFunction, 1000);
    console.log("Tate tate tate");
}
