function solution(numbers, hand) {
	let answer = [];
	const num_len = numbers.length;
	let left_hand = [3, 0];
	let right_hand = [3, 2];
	for (i = 0; i < num_len; i++) {
		if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
			answer.push('L');
			left_hand[0] = parseInt((numbers[i] - 1) / 3);
			left_hand[1] = (numbers[i] - 1) % 3;
		}
		else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
			answer.push('R');
			right_hand[0] = parseInt((numbers[i] - 1) / 3);
			right_hand[1] = (numbers[i] - 1) % 3;
		} else {
			let pos;
			if (numbers[i] === 0)
				pos = [3, 1];
			else
				pos = [parseInt((numbers[i] - 1) / 3), (numbers[i] - 1) % 3];
			// console.log("num = " + numbers[i]);
			// console.log("pos = " + pos);
			// console.log("left_hand = " + left_hand);
			// console.log("right_hand = " + right_hand + "\n");
			if ((Math.abs(pos[0] - left_hand[0]) + Math.abs(pos[1] - left_hand[1]))
				> (Math.abs(pos[0] - right_hand[0]) + Math.abs(pos[1] - right_hand[1]))) {
				right_hand[0] = pos[0];
				right_hand[1] = pos[1];
				answer.push('R');
			} else if ((Math.abs(pos[0] - left_hand[0]) + Math.abs(pos[1] - left_hand[1]))
				< (Math.abs(pos[0] - right_hand[0]) + Math.abs(pos[1] - right_hand[1]))) {
				left_hand[0] = pos[0];
				left_hand[1] = pos[1];
				answer.push('L');
			} else {
				if (hand === "right") {
					right_hand[0] = pos[0];
					right_hand[1] = pos[1];
					answer.push('R');
				} else {
					left_hand[0] = pos[0];
					left_hand[1] = pos[1];
					answer.push('L');
				}
			}
		}
	}
	answer = answer.join("");
	console.log(answer);
	return answer;
}

solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");