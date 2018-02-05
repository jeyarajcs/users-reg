const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

//Genre =require('./models/genre');
User = require('./models/User');
Plagiarism = require('./models/Plagiarism');
Reviewer = require('./models/Reviewer');
Registration = require('./models/Registration');

// Connect to Mongoose
mongoose.connect('mongodb://devibala_db:devibala_db@ds217138.mlab.com:17138/cs_conference');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/registration or /api/login');
});

app.get('/api/users', (req, res) => {
	User.getUsers((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/users/:_id', (req, res) => {
	User.getUserById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/new-user', (req, res) => {
	var user = req.body;
	User.addUser(user, (err, result) => {
		if(err){
			throw err;
		}
		res.json(result);
	});
});

app.put('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	var user = req.body;
	User.updateUser(id, user, {}, (err, result) => {
		if(err){
			throw err;
		}
		res.json(result);
	});
});

app.delete('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	User.removeUser(id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.get('/api/plagiarisms', (req, res) => {
	Plagiarism.getPlagiarisms((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/plagiarisms/:_id', (req, res) => {
	Plagiarism.getPlagiarismById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/new-plagiarism', (req, res) => {
	var user = req.body;
	Plagiarism.addPlagiarism(user, (err, result) => {
		if(err){
			throw err;
		}
		res.json(result);
	});
});

app.put('/api/plagiarisms/:_id', (req, res) => {
	var id = req.params._id;
	var user = req.body;
	Plagiarism.updatePlagiarism(id, user, {}, (err, result) => {
		if(err){
			throw err;
		}
		res.json(result);
	});
});

app.delete('/api/plagiarisms/:_id', (req, res) => {
	var id = req.params._id;
	Plagiarism.removePlagiarism(id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.get('/api/reviewers', (req, res) => {
	Reviewer.getReviewers((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/reviewers/:_id', (req, res) => {
	Reviewer.getReviewerById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/new-reviewer', (req, res) => {
	var user = req.body;
	Reviewer.addReviewer(user, (err, result) => {
		if(err){
			throw err;
		}
		res.json(result);
	});
});

app.put('/api/reviewers/:_id', (req, res) => {
	var id = req.params._id;
	var user = req.body;
	Reviewer.updateReviewer(id, user, {}, (err, result) => {
		if(err){
			throw err;
		}
		res.json(result);
	});
});

app.delete('/api/reviewers/:_id', (req, res) => {
	var id = req.params._id;
	Reviewer.removeReviewer(id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.get('/api/registrations', (req, res) => {
	Registration.getRegistrations((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/registrations/:_id', (req, res) => {
	Registration.getRegistrationById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/new-registration', (req, res) => {
	var user = req.body;
	Registration.addRegistration(user, (err, result) => {
		if(err){
			throw err;
		}
		res.json(result);
	});
});

app.put('/api/registrations/:_id', (req, res) => {
	var id = req.params._id;
	var user = req.body;
	Registration.updateRegistration(id, user, {}, (err, result) => {
		if(err){
			throw err;
		}
		res.json(result);
	});
});

app.delete('/api/registrations/:_id', (req, res) => {
	var id = req.params._id;
	Registration.removeRegistration(id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});


app.listen(3000);
console.log('Running on port 3000...');
