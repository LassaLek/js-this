let person = {
  name: 'John',
  job: 'programmer',
  sayHello: function () {
    console.log(`Hello CEOS, my name is ${this.name}`);
  }
};

// #####
// Some library - GoJS, jQuery
let library = {
  name: 'jQuery',
  libraryMethod: function (c) {
    console.log('Doing library stuff');
    // callback
    c();
  },
};

library.libraryMethod(person.sayHello);

