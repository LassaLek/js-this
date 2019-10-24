let person = {
  name: 'John',
  job: 'programmer',
  sayHello: function (name = 'Petr') {
    console.log(`Hello ${name}, my name is ${this.name}`);
  }
};

person.sayHello('Petr');

// Some library - GoJS, jQuery
setTimeout(person.sayHello, 100);

