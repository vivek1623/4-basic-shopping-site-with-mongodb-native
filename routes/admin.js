const express = require('express')

const adminControllers = require('../controllers/admin')

const router = express.Router()

router.get('/add-product', adminControllers.getAddProduct)

// router.get('/edit-product/:id', adminControllers.getEditProduct)

// router.post('/delete-product', adminControllers.deleteProduct)

// router.post('/product', adminControllers.addOrUpdateProduct)

// router.get('/products', adminControllers.getProducts)

module.exports = router
