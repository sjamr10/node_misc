
class Module2 {
  constructor() {

  }

  static method1() {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
      // error, const
      // x = "foo";
    }
    // error, already declared in block
    x = "inner";

    let fibonacci = {
      [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
          next() {
            [pre, cur] = [cur, pre + cur];
            return { done: false, value: cur }
          }
        }
      }
    }

    for (var n of fibonacci) {
      // truncate the sequence at 1000
      if (n > 1000)
        break;
      console.log(n);
    }
  }

  static method2() {
    for (let i = 1; i <= 20; i++) {
      console.log(`${i}: Hola`)
    }
    console.log();
    for (let x of [1, 2, 3, 4, 5]) {
      console.log(`${x}`)
    }
  }

  static method3() {
    for (let i = 1; i <= 20; i++) {
      console.log(`${i}:
        Hola
        Sergio`)
    }
    for (let char of "Sergio") {
      console.log(char);
    }
    console.log();
    const person = new Person();
    console.log(Person.numberOfPersons);
    const person2 = new Person();
    console.log(Person.numberOfPersons);
  }

  static method4() {
    [a, b, ...rest] = [10, 20, 30, 40, 50];
    console.log(a); // 10
    console.log(b); // 20
    (function()
      {
        var wibble = 1; // Local
        foo = 2; // Inherits from scope above (creating a closure)
        moo = 3; // Global
      }());
    var a, b;
    [a, b] = [1, 2];
    var [c=2, d=5] = [3];
    console.log(c); // 1
    console.log(d); // 7
    var e = 1;
    var f = 3;
    [e, f] = [f, e];
    console.log(e); // 1
    console.log(f); // 2
  }

  static method5() {
    const f = () => [1, 2];

    var a, b;
    [a, b] = f();
    console.log(a); // 1
    console.log(b); // 2

    for (x of f()) {
      console.log(x);
    }

    var [a, ...b] = [1, 2, 3];
    console.log(a); // 1
    console.log(b); // [2, 3]

    var o = {p: 42, q: true};
    var {p, q} = o;

    console.log(p); // 42
    console.log(q); // true
  }

  static method6() {
    const f = () => [1, 2];

    var a, b;
    [a, b] = f();
    console.log(a); // 1
    console.log(b); // 2

    for (x of f()) {
      console.log(x);
    }

    var [a, ...b] = [1, 2, 3];
    console.log(a); // 1
    console.log(b); // [2, 3]

    var o = {p: 42, q: true};
    var {p, q} = o;

    console.log(p); // 42
    console.log(q); // true
  }

  static method7() {
    const sum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc, val) => acc + val, 0);
    console.log(sum);
    console.log([...Array(100).keys()]);
  }

  walk() {
    console.log(this._name + ' is walking.');
  }

  static getNumber() {
    return 2;
  }
}

class Person {
  constructor(name) {
    if (!Person.numberOfPersons) {
      Person.numberOfPersons = 1;
    } else {
      Person.numberOfPersons++;
    }
    this._id = Person.numberOfPersons;
    this._name = name;
  }

  get name() {
    return this._name;
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

Module2.method7();
