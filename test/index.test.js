import expect from 'expect';
import test from './../src';

/** @test {} */
describe('Taco starter package', () => {

    /** @test {#} */
    it('should have a default export with working tests', () => {
        expect(
            test()
        ).toBe(true);
    });

});
