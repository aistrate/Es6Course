"use strict";

describe("destructuring", function() {

	it("can destructure arrays", function() {

		// let x = 2;
		// let y = 3;

		// [x, y] = [y, x];

		// let [x, y] = [3, 2];

		let [, x, y] = [1, 3, 2];

		expect(x).toBe(3);
		expect(y).toBe(2);

	});

});
