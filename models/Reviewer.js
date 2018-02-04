const mongoose = require('mongoose');

// Reviewer Schema
const reviewerSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	designation:{
		type: String
	},
	institute:{
		type: String,
		required: false
	},
	reviewer_id:{
		type: String
	},
	paper_id:{
		type : String
	},
	phone:{
		type: String
	},
	reporturl:{
		type: String
	},
	email:{
		type: String
	},
	date_receive:{
		type: Date
	},
	date_sent:{
		type: Date
	}
});

const Reviewer = module.exports = mongoose.model('Reviewer', reviewerSchema);

// Get Reviewers
module.exports.getReviewers = (callback, limit) => {
	Reviewer.find(callback).limit(limit);
}

// Get Reviewer
module.exports.getReviewerById = (id, callback) => {
	Reviewer.findById(id, callback);
}

// Add Reviewer
module.exports.addReviewer = (reviewer, callback) => {
	Reviewer.create(reviewer, callback);
}

// Update Reviewer
module.exports.updateReviewer = (id, reviewer, options, callback) => {
	var query = {_id: id};
	var update = {
		name: reviewer.name,
		designation: reviewer.designation,
		paper_id: reviewer.paper_id,
		institute: reviewer.institute,
		reviewer_id: reviewer.reviewer_id,
		phone: reviewer.phone,
		reporturl: reviewer.reporturl,
		email: reviewer.email,
		date_receive : reviewer.date_receive,
		date_sent : reviewer.date_sent
	}
	Reviewer.findOneAndUpdate(query, update, options, callback);
}

// Delete Reviewer
module.exports.removeReviewer = (id, callback) => {
	var query = {_id: id};
	Reviewer.remove(query, callback);
}
