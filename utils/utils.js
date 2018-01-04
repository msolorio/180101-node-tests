function add(a, b) {
  return a + b;
}

function addAsync(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 0);
}

function square(a) {
  return a * a;
}

function squareAsync(a, callback) {
  setTimeout(() => {
    callback(a * a);
  }, 0);
}

function setNames(fullName, user) {
  const names = fullName.split(' ');

  user.firstName = names[0];
  user.lastName = names[names.length - 1];

  return user;
}

module.exports = {
  add,
  addAsync,
  square,
  squareAsync,
  setNames
};
