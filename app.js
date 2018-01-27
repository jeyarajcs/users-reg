const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

//Genre =require('./models/genre');
User = require('./models/User');

// Connect to Mongoose
mongoose.connect('mongodb://devibala:devibala123@ds217138.mlab.com:17138/cs_conference');
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

app.listen(3000);
console.log('Running on port 3000...');
