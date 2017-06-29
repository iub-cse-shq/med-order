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

exports.about = function(req, res) {
	res.render('./../about.ejs', {
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
exports.add_purchase = function(req, res) {
	res.render('./../public/add_purchase.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.manage_product = function(req, res) {
	res.render('./../public/manage_product.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.payment = function(req, res) {
	res.render('./../public/payment.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.stock = function(req, res) {
	res.render('./../public/stock.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.supplier = function(req, res) {
	res.render('./../public/supplier.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.user_buy_med = function(req, res) {
	res.render('./../public/user_buy_med.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.user_index = function(req, res) {
	res.render('./../public/user_index.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.user_pre_order = function(req, res) {
	res.render('./../public/user_pre_order.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.view_invoices = function(req, res) {
	res.render('./../public/view_invoices.ejs', {
		user: req.user || null,
		request: req
	});
};
