const Product = require('../models/products')
// const Cart = require('../models/cart')

// exports.getIndex = async (req, res) => {
//   res.render('shop/index', {
//     pageTitle: 'shop',
//     path: '/'
//   })
// }

exports.getProducts = async (req, res) => {
  const products = await Product.fetchAll()
  res.render('shop/product-list', {
    pageTitle: 'All product',
    products: products,
    path: '/products'
  })
}

exports.getProduct = async (req, res) => {
  if (req.params.id) {
    const product = await Product.findById(req.params.id)
    res.render('shop/product-details', {
      pageTitle: 'Product Details',
      product: product,
      path: '/product-details'
    })
  } else
    res.redirect('/products')
}

// exports.addToCart = async (req, res) => {
//   if (!req.query._id)
//     return res.redirect('/products')
//   const product = await Product.findById(req.query._id)
//   await Cart.addProductToCart(product)
//   res.redirect('/cart')
// }

// exports.getCart = async (req, res) => {
//   res.render('shop/cart', {
//     pageTitle: 'My Cart',
//     path: '/cart'
//   })
// }

// exports.getCheckout = async (req, res) => {
//   res.render('shop/checkout', {
//     pageTitle: 'Checkout',
//     path: '/checkout'
//   })
// }