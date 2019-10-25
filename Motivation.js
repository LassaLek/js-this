// from @getify - Kyle Simpson

function identify() {
  return this.name.toUpperCase();
}

function speak() {
  const greeting = "Hello, I'm " + identify.call( this );
  console.log( greeting );
}

const me = {
  name: "Kyle"
};

const you = {
  name: "Reader"
};

speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm READER



