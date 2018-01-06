const expect = require('expect');
const rewire = require('rewire');

let saveUserSpy;
let app;


describe('handleSignup', () => {
  beforeEach(() => {
    app = rewire('./app');
    saveUserSpy = expect.createSpy();
    app.__set__("saveUser", saveUserSpy);
  });

  it('should call saveUser', () => {
    const user = {
      username: 'garz',
      likesUpsells: true
    };

    app.handleSignup(user);

    expect(saveUserSpy).toHaveBeenCalled();
  });

  it('should call saveUser with user passed in', () => {
    const user = {
      username: 'leron',
      likesUpsells: false
    };

    app.handleSignup(user);

    expect(saveUserSpy).toHaveBeenCalledWith(user);
  });
});
