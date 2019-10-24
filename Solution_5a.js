let person = {
  name: 'John',
  job: 'programmer',
  sayHello: function (name, object) {
    return function () {
      console.log(`Hello ${name}, my name is ${object.name}`);
    }
  }
};

// person.sayHello('Petr');

// Some library - GoJS, jQuery
let library = {
  libraryMethod: function (c) {
    console.log('Doing library stuff');
    // callback
    c();
  }
};

let sayHello = person.sayHello;
library.libraryMethod(sayHello('Pepa', person));
