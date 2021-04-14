const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		comment: String,
		postid: String,
		user: String,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('comments', schema);
