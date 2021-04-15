const fetch = require('node-fetch');

async function post(path, data) {
	const q = await fetch(`http://localhost:8000/api/${path}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return await q.json();
}
async function get(path) {
	const q = await fetch(`http://localhost:8000/api/${path}`);
	return await q.json();
}

const methods = {
	async getQuestions() {
		return await get('getQuestions');
	},
	async getQuestionDetails(qId) {
		return await get(`details/${qId}`);
	},
	async newQuestion(data) {
		return await post('new', data);
	},
	async newComment(data) {
		return await post('comment', data);
	},
};

module.exports = methods;
