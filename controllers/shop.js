const Product = require('../models/products')

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

exports.postCart = async (req, res) => {
  if (!req.body.productId)
    return res.redirect('/products')
  const product = await Product.findById(req.body.productId)
  if (!product)
    return res.redirect('/products')
  await req.user.addToCart(product._id)
  res.redirect('/cart')
}

exports.getCart = async (req, res) => {
  try {
    const products = await req.user.getCart()
    res.render('shop/cart', {
      pageTitle: 'Cart',
      products: products,
      path: '/cart'
    })
  } catch (e) {
    res.redirect('/')
  }
}
