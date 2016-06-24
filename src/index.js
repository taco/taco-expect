import expect from 'expect';
import { is } from 'immutable';
import deepDiff from 'deep-diff';

expect.extend({
    toDeepEqual(expected) {
        const { actual } = this;

        if (actual && actual.toJS && expected && expected.toJS) {
            expect.assert(
                is(actual, expected),
                'Expected \n%s\nto be equivalent to \n%s\n Diff %s',
                expected,
                actual,
                deepDiff(expected.toJS(), actual.toJS())
            );
        }
        else {
            const diff = deepDiff(expected, actual);
            expect(actual)
                .toEqual(
                    expected,
                    `Expected \n${actual}\n to equal `
                        + `\n${expected}\n Diff ${diff}`
                );
        }
    }
});

export default expect;
