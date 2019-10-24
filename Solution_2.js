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
    c();
  }
};
const preparedCallback = person.sayHello.bind(person);
library.libraryMethod(preparedCallback);
