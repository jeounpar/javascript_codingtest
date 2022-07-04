function solution(id_list, report, k) {
	let answer = new Array(id_list.length);
	answer.fill(0);
	let report_list = {};

	id_list.map((user_id) => {
		report_list[user_id] = [];
	})

	report.map((id) => {
		const [user_id, reported_id] = id.split(' ')
		if (!report_list[reported_id].includes(user_id))
			report_list[reported_id].push(user_id);
	})
	for (const key in report_list) {
		if (report_list[key].length >= k) {
			report_list[key].map((id) => {
				answer[id_list.indexOf(id)] += 1
			})
		}
	}
	return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));