const express = require('express')

const adminControllers = require('../controllers/admin')

const router = express.Router()

// /admin/add-product => GET
router.get('/add-product', adminControllers.getAddProduct)

// /admin/add-product => POST
router.post('/add-product', adminControllers.postAddProduct)

router.get('/edit-product/:id', adminControllers.getEditProduct)

// router.post('/delete-product', adminControllers.deleteProduct)



router.get('/products', adminControllers.getProducts)

module.exports = router
