function solution(s) {
	const len = s.length;
	let i = 0;
	let answer = 0;
	while (i < len) {
		if (s[i] >= '0' && s[i] <= '9') {
			answer = parseInt(s[i]) + answer * 10;
			i++;
		}
		else {
			if (s[i] === 'o') {
				answer = 1 + answer * 10;
				i += 3;
			} else if (s[i] === 't' && s[i + 1] === 'w') {
				answer = 2 + answer * 10;
				i += 3;
			} else if (s[i] === 't' && s[i + 1] === 'h') {
				answer = 3 + answer * 10;
				i += 5;
			} else if (s[i] === 'f' && s[i + 1] === 'o') {
				answer = 4 + answer * 10;
				i += 4;
			} else if (s[i] === 'f' && s[i + 1] === 'i') {
				answer = 5 + answer * 10;
				i += 4;
			} else if (s[i] === 's' && s[i + 1] === 'i') {
				answer = 6 + answer * 10;
				i += 3;
			} else if (s[i] === 's' && s[i + 1] === 'e') {
				answer = 7 + answer * 10;
				i += 5;
			} else if (s[i] === 'e') {
				answer = 8 + answer * 10;
				i += 5;
			} else if (s[i] === 'n') {
				answer = 9 + answer * 10;
				i += 4;
			} else if (s[i] === 'z') {
				answer = 0 + answer * 10;
				i += 4;
			}
		}
	}
	return answer;
}

solution("one4seveneight9");