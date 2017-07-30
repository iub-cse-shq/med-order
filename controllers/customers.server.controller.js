var mongoose = require('mongoose');
var Customer = require('./../models/Customer.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Customer.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var customer = new Customer(req.body);
  customer.user = req.user;
  customer.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.customer);
};


exports.delete = function(req, res) {
	var customer = req.customer;
	customer.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(customer);
		}
	});
};


module.exports.update = function(req, res) {
  var customer = req.customer;

  	customer = _.extend(customer, req.body);

  	customer.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(customer);
  		}
  	});
};

exports.customerByID = function(req, res, next, id) {
	Customer.findById(id).populate('user', 'email').exec(function(err, customer) {
		if (err) return next(err);
		if (!customer) return next(new Error('Failed to load customer ' + id));
		req.customer = customer;
		next();
	});
};
