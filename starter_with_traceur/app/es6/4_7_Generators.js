describe("generators", function() {

    it("can build an iterable", function() {

        let numbers = function*(start, end) {
            // yield 1;
            // yield 2;
            // yield 3;

            // for (let i = 0; i <= 3; i++) {
            //     yield i;
            // }

            for (let i = start; i <= end; i++) {
                console.log(i);
                yield i;
            }
        };

        // let sum = 0;
        // let iterator = numbers(1, 4);
        // console.log("next");
        // let next = iterator.next();
        // while (!next.done) {
        //     sum += next.value;
        //     console.log("next");
        //     next = iterator.next();
        // }

        let sum = 0;
        console.log("next");
        for (let n of numbers(1, 5)) {
            sum += n;
            console.log("next");
        }

        expect(sum).toBe(15);

    });

});
