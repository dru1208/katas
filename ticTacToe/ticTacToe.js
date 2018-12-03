// 0 is empty space, 1 is a X, 2 is a O

const checkWin = (arr) => {
	const countObj = arr.reduce((counter, currentValue) => {
		counter[currentValue] = counter[currentValue] ? counter[currentValue] ++ : 1
		return counter
	}, {})
	if (Object.keys(countObj).length === 1 && !countObj[0]) {
		return true
	}
	return false;
}

const checkRow = () => {

}

const checkColumn = () => {

}

const checkRows = () => {

}

const checkColumns = () => {

}

const checkDiagonals = () => {

}


const checkGrid = () => {

}

console.log(checkWin([0,0,0]))

module.exports = {
	checkWin: checkWin,
}