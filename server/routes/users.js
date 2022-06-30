const { response } = require('express');
const express = require('express');

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require('mongodb').ObjectId;

//get list of all users
userRoutes.route('/users').get((req, res) => {
	let db_connect = dbo.getDb('twitter');
	db_connect
		.collection('users')
		.find({})
		.toArray((err, result) => {
			if (err) throw err;
			res.json(result);
		});
});

module.exports = userRoutes;
