
const calcWinner = (resultMove) => {
	const winners = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < winners.length; i++) {
		const [one, two, tree] = winners[i]
		if (resultMove[one] && resultMove[one] === resultMove[two] && resultMove[one] === resultMove[tree]) {
			return true
		}
	}
	return false
}

export default calcWinner