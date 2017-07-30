var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

    product_id: {
        type: String,
        trim: true,
        default: '',
        required: 'Number required'
    },
      
    product_name: {
        type: String,
        trim: true,
        default: '',
        required: 'product Name required'
      },
      

    product_quantity: {
        type: Number,
        trim: true,
        default: '',
        required: 'Number required'
    },
    
    product_category: {
        type: String,
        trim: true,
        default: '',
        required: 'category required'
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


var Product = mongoose.model('Product', ProductSchema, 'product');
module.exports = Product;
