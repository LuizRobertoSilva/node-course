const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    describe('#add', () => {

        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
            // if (res != 44)
            //     throw new Error(`Expected 44, but got ${res}.`);
        });
    });



    it('should square a number', () => {
        var res = utils.square(3);
        expect(res).toBe(9).toBeA('number');
        // if (res != 9)
        //     throw new Error(`Expected 9, but got ${res}`);
    });

    it('should expect some values', () => {
        //expect(12).toNotBe('12');
        //expect({name: 'Luiz'}).toNotEqual({name: 'luiz'});
        // expect([2,3,4]).toInclude(2);
        // expect([2,3,4]).toExlude(2);
        expect({
            name: 'Luiz',
            age: 12
        }).toInclude({
            age: 12
        })
    })

    it('should verify first and last name are set', () => {
        var name = 'Luiz Silva';
        var user = {};
        var user = utils.setName(user, name);

        expect(user).toInclude({
            firstName: 'Luiz',
            lastName: 'Silva'
        })
    });

    it('should async add two number(async)', (done) => {
        utils.asyncAdd(4, 4, (sum) => {
            expect(sum).toBe(8).toBeA('number');
            done();
        })
    });
    it('should async square a number(async)', (done) => {
        utils.asyncSquare(3, (square) => {
            expect(square).toBe(9).toBeA('number');
            done();
        })
    });
})