const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');

const commentModel = require('./models/commentModel');
const questionModel = require('./models/questionModel');

const { randStr } = require('./util/util');

(async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
	} catch (e) {
		console.error(e);
	}
})();

const app = express();

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Methods', 'POST');
	res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
	next();
});

app.post('/api/new', async (req, res) => {
	const name = req.body.firstName === '' ? 'Anonymous' : req.body.firstName;
	const subject = req.body.subject;
	const question = req.body.question;
	res.send(
		await questionModel.create({
			_id: randStr(6),
			name,
			subject,
			question,
		})
	);
});

app.post('/api/comment', async (req, res) => {
	const comment = req.body.comment;
	const postid = req.body.postid;
	const name =
		req.body.commentAuthor === '' ? 'Anonymous' : req.body.commentAuthor;

	res.send(
		await commentModel.create({
			postid,
			comment,
			name,
		})
	);
});

app.get('/api/getQuestions', async (req, res) => {
	const questions = await questionModel.find();

	res.json({
		success: true,
		questions,
	});
});

app.get('/api/details/:qId', async (req, res) => {
	const qId = req.params.qId;
	const qInfo = await questionModel.findById(qId).lean();
	if (!qInfo)
		res.json({
			success: false,
			error: 'Question not found!',
		});
	let comments = await commentModel.find({
		postid: qId,
	});

	if (!comments || comments === null) comments = [];
	res.json({
		success: true,
		...qInfo,
		comments,
	});
});

app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`);
});
