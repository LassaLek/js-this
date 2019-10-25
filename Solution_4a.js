let person = {
  name: 'John',
  job: 'programmer',
  prepareSayHello: function (name, object) {
    return function () {
      console.log(`Hello ${name}, my name is ${object.name}`);
    }
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

library.libraryMethod(person.prepareSayHello('Pepa', person));
