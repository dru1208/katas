const ticTacToe = require("./ticTacToe.js")
const { checkWin } = ticTacToe;

describe("checking for wins", () => {
	let testArray;
	it ("should be true if the 3 spots provided are a win", () => {
		testArray = [1, 1, 1];
		expect(checkWin(testArray)).toBe(true);
		testArray = [2, 2, 2];
		expect(checkWin(testArray)).toBe(true);
	})
	it ("should be false if the 3 spots provided are not a win", () => {
		testArray = [1, 1, 2];
		expect(checkWin(testArray)).toBe(false);
	})
	it ("should be false if there's an empty space provided", () => {
		testArray = [0, 0 , 1];
		expect(checkWin(testArray)).toBe(false);
	})
})