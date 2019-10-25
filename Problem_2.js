let person = {
  name: 'John',
  job: 'programmer',
  sayHello: function () {
    console.log(`Hello CEOS, my name is ${this.name}`);
  }
};

// #####
setTimeout(person.sayHello, 100);
