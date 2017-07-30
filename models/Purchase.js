var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PurchaseSchema = {

    // purchase_no: {
    //     type: String,
    //     trim: true,
    //     default: '',
    //     required: 'Number required'
    // },


    purchase_product_name: {
        type: String,
        trim: true,
        default: '',
        required: 'Name required'
    },
      

    vendor_purchase_name: {
        type: String,
        trim: true,
        default: '',
        required: 'Name required'
    },      
      

    purchase_totalsale: {
        type: Number,
        trim: true,
        default: '',
        //required: 'Number required'
      },
      
    // purchase_paid: {
    //     type: Number,
    //     trim: true,
    //     default: '',
    //     required: 'Number required'
    // },
    // purchase_due: {
    //     type: Number,
    //     trim: true,
    //     default: '',
    //     required: 'Number required',
    // },

    purchase_price: {
        type: Number,
        trim: true,
        default: '',
        required: 'Number required',
    },
    
    purchase_quantity: {
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

var Purchase = mongoose.model('Purchase', PurchaseSchema, 'purchase');
module.exports = Purchase;
