'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('./../controllers/core.server.controller');
	app.route('/').get(core.index);
	app.route('/about').get(core.about);
	app.route('/add_product').get(core.add_product);
	app.route('/add_purchase').get(core.add_purchase);
	app.route('/manage_product').get(core.manage_product);
	app.route('/payment').get(core.payment);
	app.route('/stock').get(core.stock);
	app.route('/supplier').get(core.supplier);
	app.route('/view_invoices').get(core.view_invoices);
	app.route('/user_buy_med').get(core.user_buy_med);
	app.route('/user_index').get(core.user_index);
	app.route('/user_pre_order').get(core.user_pre_order);
};
