const express = require('express');
const router = express.Router();
const {createProducts,getProducts} = require('../Controller/productController');
const auth = require('../auth')

//middleware for authetication
router.use(auth)

// //get products from database
router.get('/',getProducts)
//post products
router.post('/',createProducts)



module.exports = router;