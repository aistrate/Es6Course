"use strict";

describe("how let works", function() {

	it("will provide block scoping, unlike var", function() {

		var doWork = function(flag) {

			// if (flag) {
			// 	var x = 3;
			// }
			// return x;

			if (flag) {
				let x = 3;
				return x;
			}

		};

		var result = doWork(true);
		expect(result).toBe(3);

	});

	it("will provide block scoping with for", function() {

		var doWork = function() {

			//for (let i = 0; i < 10; i++) {
			for (var i = 0; i < 10; i++) {

			}
			return i;

		};

		var result = doWork();
		expect(result).toBe(10);

	});

});
