describe("My js code", function () {

	// Truncate string
	describe("truncateString", function () {
		it("should truncate strings", function () {

			// EXERCISE
			var output = truncateString("fisk", 3);

			// VERIFICATION
			expect(output).toBe("fis");
		});

		it("should handle empty strings", function () {

			// EXERCISE
			var output = truncateString("", 3);

			// VERIFICATION
			expect(output).toBe("");
		});
	});


	describe("parseDate function", function () {

		it("should be a function", function () {
			expect(parseDate).toBeDefined();
			expect(parseDate).toEqual(jasmine.any(Function));
		});

		it("should parse a date", function () {
			var input = "2006:02:01"
			var output [2006, 02, 01];

			expect(parseDate(input)).toEqual(output);
		});
	});
});
