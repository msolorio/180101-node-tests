 const { saveUser } = require('./db');

function handleSignup(user) {
  // TODO: check if user exists
  saveUser(user);
  // TODO: send welcome email
}

module.exports = { handleSignup };
