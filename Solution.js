let person = {
  name: 'John',
  job: 'programmer',
  sayHello: function (name = 'Petr') {
    console.log(`Hello ${name}, my name is ${this.name}`);
  }
};

person.sayHello('Ales');

// Some library - GoJS, jQuery
let library = {
  libraryMethod: function (c) {
    console.log('Doing library stuff');
    // callback
    c();
  }
};

/*The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.*/
const preparedCallback = person.sayHello.bind(person, 'Adam');
preparedCallback('Igor');
library.libraryMethod(preparedCallback);
