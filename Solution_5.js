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
  libraryMethod: function (c) {
    console.log('Doing library stuff');
    // callback
    c();
  }
};

(function () {
  library.libraryMethod(function () {
    person.sayHello()
  });
})()



setTimeout(function () {
  person.sayHello()
}, 100);
