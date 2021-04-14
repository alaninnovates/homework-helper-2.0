const fetch = require('node-fetch');

module.exports = {
	async getQuestions() {
		const q = await fetch('http://localhost:8000/getQuestions');
		const res = await q.json();
		return res;
	},
	async getQuestionDetails(qId) {
		const q = await fetch(`http://localhost:8000/details/${qId}`);
		const res = await q.json();
		console.log(res);
		return res;
	},
};
