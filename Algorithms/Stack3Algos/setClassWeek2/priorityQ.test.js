const priorityQ = require('./priorityQ');

describe('priorityQ', () => {
    it('removes the first item in the lowest priority keys array', () => {
        q1 = new priorityQ;
        let obj = {name: "Sean Hildreth", school: "Seattle, WA", black_belts: 2}
        q1.add(3, 10);
        q1.add(4, 'c')
        q1.add(obj, 0)
        q1.add(10, 'a');
        q1.add(7, 1);
        q1.add(3, 'b')
        q1.add(7, 100);
        console.log(q1);
        let val = q1.offer();
        console.log(q1);
        console.log(val);
        expect(val[0]).toEqual(obj);
        let val2 = q1.offer();
        console.log(q1);
        console.log(val2);
        expect(val2[0]).toEqual(7);
    })
});