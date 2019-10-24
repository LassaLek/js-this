let person = {
  name: 'John',
  job: 'programmer',
  sayHello: function (name = 'Petr') {
    console.log(`Hello ${name}, my name is ${this.name}`);
  }
};

person.sayHello('Petr');

// Some library - GoJS, jQuery
let library = {
  name: 'jQuery',
  libraryMethod: function (c) {
    console.log('Doing library stuff');
    // callback
    c();
  },
  librarySayHello: person.sayHello
};

library.librarySayHello('Adam');
library.libraryMethod(library.librarySayHello);

