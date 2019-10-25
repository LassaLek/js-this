let person = {
  name: 'John',
  job: 'programmer',
  sayHello: function (name = 'Petr') {
    console.log(`Hello ${name}, my name is ${this.name}`);
  }
};

// Some library - GoJS, jQuery
let library = {
  libraryMethod: function (c) {
    console.log('Doing library stuff');
    // callback
    /*The call() method calls a function with a given this value and arguments provided individually.*/
    c.call(person, 'Ales');
  }
};

library.libraryMethod(person.sayHello);
