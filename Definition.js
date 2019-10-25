/*It has different values depending on where it is used:

  In a method, this refers to the owner object.
  Alone, this refers to the global object.
  In a function, this refers to the global object.
  In a function, in strict mode, this is undefined.
  In an event, this refers to the element that received the event.
  Methods like call(), and apply() can refer this to any object.*/

// Declarations
function snitch() {
  console.log('Snitched:', this);
}

function strictSnitch() {
  'use strict';
  console.log('Strict snitched:', this);
}

let person = {
  name: 'John',
  job: 'programmer',
  snitch: snitch
};

let library = {
  name: 'jQuery',
  snitch: snitch
};

// SHOW this
snitch();
person.snitch();
library.snitch();
strictSnitch();

