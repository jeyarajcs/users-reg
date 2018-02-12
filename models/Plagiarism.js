const mongoose = require('mongoose');

// Plagiarism Schema
const plagiarismSchema = mongoose.Schema({
	paper_id:{
		type: String,
		required: true,
		ref : 'User'
	},
	percentage:{
		type : Number,
		required : false
	},
	date_receive:{
		type: Date,
		required : false
	},
	date_checked:{
		type: Date,
		required : false
	},
	reporturl:{
		type: String,
		required : false
	}

});

const Plagiarism = module.exports = mongoose.model('Plagiarism', plagiarismSchema);

// Get Plagiarisms
module.exports.getPlagiarisms = (callback, limit) => {
	Plagiarism.find(callback).limit(limit);
}

// Get Plagiarism
module.exports.getPlagiarismById = (id, callback) => {
	//Plagiarism.findById(id, callback);
	var ObjectId = require('mongoose').Types.ObjectId;
	var filter = {
		"_id" : ObjectId(id)
	}
	Plagiarism.aggregate([

			{
				$match : filter,
			},
			{
				$lookup : {
					"from" : "users",
					"localField" : "paper_id",
					"foreignField" : "paper_id",
					"as" : "paper_details"
				}
			}/*,
			{
				$match : {"paper_details.0":{$exists:true}}
			},
			{
				$unwind : '$paper_details'
			},
			{
				$project : {
					_id : 1,
					percentage : 1,
					paper_id : 1,
					date_receive :1,
					date_checked : 1,
					paper_title : "$paper_details.title",
					author : "$paper_details.name",
					designation : "$paper_details.designation",
					institute : "$paper_details.institute",
					status : "$paper_details.status"
				}
			}*/
			
		], callback)
}

// Add Plagiarism
module.exports.addPlagiarism = (plagiarism, callback) => {
	Plagiarism.create(plagiarism, callback);
}

// Update Plagiarism
module.exports.updatePlagiarism = (id, plagiarism, options, callback) => {
	var query = {_id: id};
	var update = {
		paper_id: plagiarism.paper_id,
		percentage: plagiarism.percentage,
		date_receive: plagiarism.date_receive,
		date_checked: plagiarism.date_checked,
		reporturl: plagiarism.reporturl
	}
	Plagiarism.findOneAndUpdate(query, update, options, callback);
}

// Delete Plagiarism
module.exports.removePlagiarism = (id, callback) => {
	var query = {_id: id};
	Plagiarism.remove(query, callback);
}
