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

export async function getQuestions() {
	return await get('getQuestions');
}
export async function getQuestionDetails(qId) {
	return await get(`details/${qId}`);
}
export async function newQuestion(data) {
	return await post('new', data);
}
export async function newComment(data) {
	return await post('comment', data);
}
