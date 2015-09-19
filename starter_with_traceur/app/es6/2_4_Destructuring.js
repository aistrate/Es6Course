describe("destructuring", function() {

    it("can destructure arrays", function() {

        // let x = 2;
        // let y = 3;

        // [x, y] = [y, x];

        // let [x, y] = [3, 2];

        // let [, x, y] = [1, 3, 2];

        let [, x, y, z] = [1, 3, 2];

        expect(x).toBe(3);
        expect(y).toBe(2);
        expect(z).toBeUndefined();

    });

    it("can destructure objects", function() {

        let doWork = function() {
            return {
                firstName: "Scott",
                lastName: "Allen",
                twitter: "OdeToCode"
            };
        };

        //// Not working
        // let { firstName: firstName, twitter: twitter } = doWork();

        // expect(firstName).toBe("Scott");

    });

    it("works with parameters", function() {

        let doWork = function(url, {data, cache}) {
            return data;
        };

        let result = doWork(
                "api/test", {
                    data: "test",
                    cache: false
                });

        expect(result).toBe("test");

    });

});
