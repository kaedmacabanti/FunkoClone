const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productsSchema = new schema({
  id:{
    type: Number,
    required: true
  },
  category:{
    type: String,
    required: true
  }, 
  license:{
    type: String,
    required: true
  }, 
  product_name:{
    type: String,
    required: true
  },
  product_no:{
    type: Number,
    required: true
  },  
  product_description: {
    type: String,
    required: true
  }
  ,price:{
    type: Number,
    required: true
  },
   picture1:{
    type: String,
    required: true
  }, 
  picture2:{
    type: String,
    required: true
  },
});

const Product = mongoose.model('Products',productsSchema);
module.exports = Product;













  // product_name:{
  //   type: String,
  //   required: true
  // },
  // product_no:{
  //   type: Number,
  //   required: true
  // },  
  // product_description: {
  //   type: String,
  //   required: true
  // }
  // ,price:{
  //   type: Number,
  //   required: true
  // },
  //  picture1:{
  //   type: String,
  //   required: true
  // }, 
  // picture2:{
  //   type: String,
  //   required: true
  // },