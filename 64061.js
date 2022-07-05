function solution(board, moves) {
	let bucket = [];
	let answer = 0;
	const row_len = board.length;
	for (const tmp of moves) {
		const pos = tmp - 1;
		for (i = 0; i < row_len; i++) {
			if (board[i][pos] === 0)
				continue;
			else {
				const get_out = board[i][pos];
				console.log(get_out);
				board[i][pos] = 0;
				bucket.push(get_out);
				break;
			}
		}
	}
	for (i = 0; i < bucket.length - 1; i++) {
		if (bucket[i] === bucket[i + 1]) {
			bucket.splice(i, 2);
			answer += 2;
			i -= 2;
		}
	}
	return answer;
}

solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]);