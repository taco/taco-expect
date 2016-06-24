import { fromJS } from 'immutable';
import expect from './../src';

describe('Taco Expect', () => {

    it('should have properly extended expect', () => {
        expect(
            expect().toDeepEqual
        ).toBeA('function');
    });

    it('should not throw errors with equal objects', () => {
        expect(
            { a: 1 }
        ).toDeepEqual(
            { a: 1 }
        );
        expect(
            null
        ).toDeepEqual(
            null
        );

        expect(
            fromJS([{ a: 1}, { b: 2 }])
        ).toDeepEqual(
            fromJS([{ a: 1}, { b: 2 }])
        );
    });

    it('should throw an error on unequal objects', () => {

        expect(() => {
            expect(
                fromJS([{ a: 1}, { b: 2 }])
            ).toDeepEqual(
                fromJS([{ a: 2}, { b: 2 }])
            );
        }).toThrow(/Diff/);
    });

});
