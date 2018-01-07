const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Luiz', 20);
        expect(spy).toHaveBeenCalledWith('Luiz', 20);

    })
    it('should call saveUser with user Object', () => {
        var email = 'email@email.com';
        var password = '123qwe!d@#';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        });
    });
});