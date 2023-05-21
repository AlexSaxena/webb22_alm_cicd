class Greet {
  constructor() {
    this.result = '';
  }

  getResult() {
    return this.result;
  }

  sayHello(name = 'newUser') {
    this.result = `Hello ${name}`;
    return this.result;
  }
}

module.exports = Greet;
