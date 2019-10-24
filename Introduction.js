let person = {
  name: 'John',
  job: 'programmer',
  sayHello: function (name) {
    console.log(`Hello ${name}, my name is ${this.name}`);
  }
};

person.sayHello('Petr');
