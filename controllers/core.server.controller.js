'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('./../public/index.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.add_product = function(req, res) {
	res.render('./../public/add_product.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.about = function(req, res) {
	res.render('./../about.ejs', {
		user: req.user || null,
		request: req
	});
};
