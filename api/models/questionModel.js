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
		_id: false,
	}
);

module.exports = mongoose.model('questions', schema);
