describe("comprehensions", function() {

    // Array comprehensions work only on Firefox (traceur cannot compile them,
    // because they are not in the ES6 spec, but were moved to ES7)

    it("should create arrays easily", function() {

        var ary = [for (i of [1, 2, 3]) i]; // [1, 2, 3]
        expect(ary[2]).toBe(3);

        var ary2 = [for (i of [1, 2, 3]) i * i]; // [1, 4, 9]
        expect(ary2[2]).toBe(9);

        var ary3 = [for (i of [1, 2, 3]) if (i < 3) i]; // [1, 2]
        expect(ary3.length).toBe(2);

    });

    it("should create a cartesian product", function() {

        var ary = [for (first of ['William', 'John', 'Blake'])
                   for (middle of ['Robert', 'Andrew', 'John'])
                   if (first != middle) (first + ' ' + middle + ' Smith')];

        expect(ary[0]).toBe('William Robert Smith');
        expect(ary.length).toBe(8);

    });

});
