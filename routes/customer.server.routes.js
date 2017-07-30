module.exports = function(app){

 var customers = require('./../controllers/customers.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/customers')
	.get(customers.list)
	.post(users.requiresLogin, customers.create);

  app.route('/api/customers/:customerId')
	.get(customers.read)
  .delete(users.requiresLogin, customers.delete);

	app.route('/api/customers/edit/:customerId')
	.get(customers.read)
	.put(users.requiresLogin, customers.update);


app.param('customerId', customers.customerByID);


}
