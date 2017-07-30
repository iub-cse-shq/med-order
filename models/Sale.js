var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SaleSchema = {

    sale_id: {
        type: String,
        trim: true,
        default: '',
        required: 'Number required'    
    },
    
    cus_id: {
        type: Number,
        trim: true,
        default: '',
        required: 'Number required'    
    },

    sale_quantity: {
        type: Number,
        trim: true,
        default: '',
        required: 'Number required',
    },

    sale_price: {
        type: Number,
        trim: true,
        default: '',
        required: 'Number required',
    },
    
    sale_total: {
        type: Number,
        trim: true,
        default: '',
        required: 'Number required'
    },

    sale_date: {
        type: String,
        trim: true,
        default: '',
        required: 'Date required'
      },
    
    sale_totalsale: {
        type: Number,
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

var Sale = mongoose.model('Sale', SaleSchema, 'sale');
module.exports = Sale;
