const Set = require('./set');

describe('Set', () => {
    beforeEach(() => {
        s1 = new Set;
        s1.add(1);
        s1.add(2);
        s1.add(3);
        s1.add(4);
        s1.add(5);
        s1.add(6);
        s1.add(7);
        s1.add(8);
        s1.add(9);
        s1.add(10);
    });
    

    it('does not add a value if that value is already present', () => {
        let val = 6
        s1.add(val);
        expect(s1.set[s1.set.length-1]).not.toEqual(val);
    });

    // it('removes a value if present', () => {
    //     s1.
    // });
});