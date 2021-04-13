require('dotenv').config();

const express = require('express');
const session = require('express-session');

const path = require('path');

const commentModel = require('./models/commentModel');
const questionModel = require('./models/questionModel');

const app = express();

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
	})
);
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
	const posts = 'Get posts';
	res.render(path.join(__dirname, 'views', 'pages', 'index.ejs'), {
		posts,
	});
});

app.get('/new', (req, res) => {
	res.render(path.join(__dirname, 'views', 'pages', 'new.ejs'));
});

app.get('/question/:id', async (req, res) => {
	const id = req.params.id;
	if (!id) return res.redirect('/404');
	const data = 'Get question content with post id';
	const comments = 'Get comments with post id';
	if (!data[0] || !comments) return res.redirect('/404');

	res.render(path.join(__dirname, 'views', 'pages', 'question.ejs'), {
		data: data[0],
		rowid: id,
		responses: comments,
	});
});

// api routes
app.post('/api/new', async (req, res) => {
	const user = req.body.firstName === '' ? 'Anonymous' : req.body.firstName;
	const topic = req.body.topic;
	const question = req.body.question;

	('Insert a new question with user, topic, question');
	res.redirect('/');
});

app.post('/api/comment', async (req, res) => {
	const comment = req.body.comment;
	const postid = req.body.postid;
	const user = req.body.firstName === '' ? 'Anonymous' : req.body.firstName;

	('Insert a comment with comment, postid, user');
	res.redirect(`/question/${postid}`);
});

app.get('/404', (req, res) => {
	res.send('<h1><a href="/">Please go somewhere that exists</a></h1>');
});

app.get('/*', (req, res) => res.redirect('/404'));

app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`);
});
