const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		_id: String,
		name: String,
		subject: String,
		question: String,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('questions', schema);
