describe("using const", function() {

    it("will make a variable read-only", function() {

        const MAX_SIZE = 10;

        //MAX_SIZE = 12; // Syntax error

        expect(MAX_SIZE).toBe(10);

    });

    it("can shadow outer declaration", function() {

        //let x = 12;
        const x = 12;
        var doWork = function() {
            //const x = 12;
            //let x = 12;
            //var x = 12;

            //var x = 10;
            let x = 10;

            return x;
        };

        var result = doWork();
        expect(result).toBe(10);
        expect(x).toBe(12);

    });

});
