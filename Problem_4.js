let person = {
  name: 'John',
  job: 'programmer',
  sayHello: function () {
    console.log(`Hello CEOS, my name is ${this.name}`);
  }
};

// Problem.js
let sayHello = person.sayHello;

// #####
// Some library - GoJS, jQuery
let library = {
  name: 'jQuery',
  libraryMethod: function () {
    console.log('Doing library stuff');
    // callback
    this.librarySayHello()
  },
  librarySayHello: sayHello
};

library.libraryMethod();

