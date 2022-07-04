function solution(lottos, win_nums) {
	let answer = new Array(2);
	answer.fill(0);
	lottos.sort();
	win_nums.sort();
	let zero_cnt = 0;
	let correct_cnt = 0;
	for (i = 0; i < 6; i++) {
		const a = lottos[i];
		if (a === 0) {
			zero_cnt += 1;
			continue;
		}
		for (j = 0; j < 6; j++) {
			const b = win_nums[j];
			if (a == b) {
				correct_cnt += 1;
				break;
			}
		}
	}
	if (zero_cnt === 0 && correct_cnt === 0) {
		answer[0] = 6;
		answer[1] = 6;
	} else if (zero_cnt === 6 && correct_cnt === 0) {
		answer[0] = 1;
		answer[1] = 6;
	} else {
		answer[0] = 7 - zero_cnt - correct_cnt;
		answer[1] = 7 - correct_cnt;
	}
	return answer;
}
ans = solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
console.log("answer = " + ans);