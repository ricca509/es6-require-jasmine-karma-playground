import { Something } from '../src/Something';

describe('Something', function () {
    it('exists', function () {
        expect(Something).toBeDefined();
    });

    describe('#sum', function () {
        beforeEach(function () {
            this.something = new Something();
        });

        it('performs a sum', function () {
            expect(this.something.sum(1, 2)).toEqual(3);
        });
    });
});
