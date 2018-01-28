const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	designation:{
		type: String
	},
	institute:{
		type: String,
		required: true
	},
	title:{
		type: String
	},
	paper_id:{
		type : String
	},
	phone:{
		type: String
	},
	url:{
		type: String
	},
	email:{
		type: String
	},
	date_receive:{
		type: Date
	},
	status : {
		type : String
	}
});

const User = module.exports = mongoose.model('User', userSchema);

// Get Users
module.exports.getUsers = (callback, limit) => {
	User.find(callback).limit(limit);
}

// Get User
module.exports.getUserById = (id, callback) => {
	User.findById(id, callback);
}

// Add User
module.exports.addUser = (user, callback) => {
	User.create(user, callback);
}

// Update User
module.exports.updateUser = (id, user, options, callback) => {
	var query = {_id: id};
	var update = {
		name: user.name,
		designation: user.designation,
		paper_id: user.paper_id,
		institute: user.institute,
		title: user.title,
		phone: user.phone,
		url: user.url,
		email: user.email,
		date_receive : user.date_receive,
		status : user.status
	}
	User.findOneAndUpdate(query, update, options, callback);
}

// Delete User
module.exports.removeUser = (id, callback) => {
	var query = {_id: id};
	User.remove(query, callback);
}
