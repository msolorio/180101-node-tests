const expect = require('expect');

const {
  add,
  addAsync,
  square,
  squareAsync,
  setNames
} = require('./utils');

describe('add', function() {
  it('should add two numbers', function() {
    expect(add(2, 3)).toBeA('number').toBe(5);
  });
});

describe('square', function() {
  it('should return the square of a number', function() {
    expect(square(3)).toBeA('number').toBe(9);
  });
});

describe('setNames', function() {

  it('should return a user object with proper firstName and lastName properties', function() {

    const user = {
      username: 'asdf',
      age: 21
    };

    expect(setNames('Frank Hubert Costillo', user))
      .toBeA('object')
      .toEqual({
        username: 'asdf',
        age: 21,
        firstName: 'Frank',
        lastName: 'Costillo'
      });
  });
});

describe('addAsync', function() {

  // passing argument (done) to callback signifies this is an
  // async test
  it('should add two numbers asynchronously', function(done) {
    addAsync(1, 2, (sum) => {
      expect(sum).toBeA('number').toBe(3);
      done();
    });
  });
});

describe('squareAsync', function() {
  it('should square a number asynchronously', function(done) {
    squareAsync(3, (product) => {
      expect(product).toBeA('number').toBe(9);
      done();
    });
  });
});
