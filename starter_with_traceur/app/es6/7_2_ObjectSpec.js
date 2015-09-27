describe("object", function() {

    describe("is function", function() {

        it("should consider positive and negative zero different", function() {

            expect(-0 === 0).toBe(true);
            expect(Object.is(-0, 0)).toBe(false);

        });

        it("should consider NaN to be NaN", function() {

            expect(NaN === NaN).toBe(false);
            expect(Object.is(NaN, NaN)).toBe(true);

        });

    });

    describe("assign function", function() {

        it("should apply mixins to objects", function() {

            var shark = {
                bite: function(target) {
                    target.hurt = true;
                }
            };

            var person = {};

            var laser = {
                pewpew: function(target) {
                    target.exploded = true;
                }
            };

            Object.assign(shark, laser);

            shark.pewpew(person);
            expect(person.exploded).toBe(true);

        });

    });

});
