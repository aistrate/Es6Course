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

    it("should work with returned data", function(done) {

        function *main() {
            var price = yield getStockPrice();
            expect(price).toBe(50);

            if (price > 45) {
                yield executeTrade();
            } else {
                console.log('trade not made');
            }

            done();
        }

        async.run(main);

    });

    it("should work with errors", function(done) {

        function *main() {
            try {
                var price = yield getStockPrice();
                expect(price).toBe(50);

                if (price > 45) {
                    yield executeTrade();
                } else {
                    console.log('trade not made');
                }
            } catch(ex) {
                expect(ex.message).toBeDefined();
                console.log('error! ' + ex.message);
            }

            done();
        }

        async.run(main);

    });

    it("should also work with promises", function(done) {

        function *main() {
            try {
                var price = yield getStockPriceP();
                expect(price).toBe(50);

                if (price > 45) {
                    yield executeTradeP();
                } else {
                    console.log('trade not made');
                }
            } catch(ex) {
                expect(ex.message).toBeDefined();
                console.log('error! ' + ex.message);
            }

            done();
        }

        asyncP.run(main);

    });

});
