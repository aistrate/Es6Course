describe("Async generator", function() {

    xit("should be difficult to read with regular async code (naive pause)", function() {

        console.log('start');
        naivePause(500);
        console.log('middle');
        naivePause(500);
        console.log('end');

        expect(true).toBe(true);

    });

    xit("should be difficult to read with regular async code", function() {

        console.log('start');
        oldPause(500, function() {
            console.log('middle');
            oldPause(500, function() {
                console.log('end');
            });
        });

        expect(true).toBe(true);

    });

    it("should be easier to read with generators", function(done) {

        function *main() {
            console.log('start');
            yield pause(500);
            console.log('middle');
            yield pause(500);
            console.log('end');

            expect(true).toBe(true);
            done();
        }

        async.run(main);

    });

});
