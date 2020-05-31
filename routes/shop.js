const express = require('express')

const shopControllers = require('../controllers/shop')

const router = express.Router()

router.get('/products', shopControllers.getProducts)

router.get('/products/:id', shopControllers.getProduct)

// router.post('/add-to-cart', shopControllers.addToCart)

// router.get('/cart', shopControllers.getCart)

// router.get('/checkout', shopControllers.getCheckout)


module.exports = router