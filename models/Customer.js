var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CustomerSchema = {

    customer_id: {
        type: String,
        trim: true,
        default: '',
        required: 'Number required'
    },
      
    customer_firstName: {
        type: String,
        trim: true,
        default: '',
        required: 'First Name required'
      },

    customer_lastName: {
        type: String,
        trim: true,
        default: '',
        required: 'Last Name required'
      },

    customer_email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email required'
    },
    customer_address: {
        type: String,
        trim: true,
        default: '',
        required: 'Address required',
    },

    customer_age: {
        type: String,
        trim: true,
        default: '',
        required: 'Number required'
    },
    
    customer_paid: {
        type: String,
        trim: true,
        default: '',
        required: 'Number required'
    },
    
    customer_due: {
        type: String,
        trim: true,
        default: '',
        required: 'Number required',
    },
    
    user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}


var Customer = mongoose.model('Customer', CustomerSchema, 'customer');
module.exports = Customer;
