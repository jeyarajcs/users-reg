const mongoose = require('mongoose');

// Registration Schema
const registrationSchema = mongoose.Schema({
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
	address:{
		type:String,
		require:true
	},
	email:{
		type: String
	},
	phone:{
		type: String
	},
	title:{
		type: String
	},
	paper_id:{
		type : String
	},
	category:{
		type:String
	},
	tutorial_enrolled:{
		type: String
	},
	
	payment_mode:{
		type: String
	},
	bank : {
		type : String
	}
});

const Registration = module.exports = mongoose.model('Registration', registrationSchema);

// Get Registration
module.exports.getRegistrations = (callback, limit) => {
	Registration.find(callback).limit(limit);
}

// Get Registration
module.exports.getRegistrationById = (id, callback) => {
	Registration.findById(id, callback);
}

// Add registration
module.exports.addRegistration = (registration, callback) => {
	Registration.create(registration, callback);
}

// Update Registration
module.exports.updateRegistration = (id, registration, options, callback) => {
	var query = {_id: id};
	var update = {
		name: registration.name,
		designation: registration.designation,
		institute: registration.institute,
		email: registration.email,
		phone: registration.phone,
		title: registration.title,
		paper_id: registration.paper_id,
		category: registration.category,
		tutorial_enrolled: registration.tutorial_enrolled,
		payment_mode : registration.payment_mode,
		bank : registration.bank	
		
		}
	Registration.findOneAndUpdate(query, update, options, callback);
}

// Delete Registration
module.exports.removeRegistration = (id, callback) => {
	var query = {_id: id};
	Registration.remove(query, callback);
}