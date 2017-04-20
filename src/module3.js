class Module3 {
  constructor() {

  }

  static method1() {
    console.log([...Array(100).keys()]);
    const sum = [...Array(100).keys()].reduce((acc, val) => acc + val, 0);
    console.log(sum);
  }

  static method2() {
    let foo = 2;
    eval('foo = foo + 2;');
    console.log(foo);
  }

  static method3() {
    const email = 'sjamr10@gmail.com'
    const person = {
      name: 'Sergio',   // property_# may be an identifier...
      email,   // or a number...
      'age': 27
    }; // or a string

    console.log(person);
  }

  static method4() {
    {
      var x = 2;
    }
    console.log('Hola');
    console.log(x);
  }

}

class MyClass {
  constructor() {
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };

  }

  method2() {
    const firstName = 'Sergio';
    const lastName = 'Miranda';
    const email = 'sjamr10@gmail.com';
    const person = { firstName, lastName, email };
    this.state = person;

    console.log(`${this.state.firstName}
${this.state.lastName}
${this.state.email}
`);
  }

  method3() {
    var arr = [];
    for (let i = 0; i < 1000; i++) {
      arr.push('');
    }
  }

  method4() {
    var arr = new Array(1000);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = '';
    }
  }

  measureTime(method) {
    console.time("loop");
    for (let i = 0; i < 10000; i++) {
      method();
    }
    console.timeEnd("loop")
  }
}


export default Module3;
