const { checkWin } = require("./ticTacToe")

describe("checkWin", () => {
	let winArray;
	it("should return true if the 3 spots provided are a win", () => {
		winArray = [1, 1, 1];
		expect(checkWin(winArray)).toBe(true);
	})
})