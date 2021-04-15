const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		postid: String,
		comment: String,
		name: String,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('comments', schema);
