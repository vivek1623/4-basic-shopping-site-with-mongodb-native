const Product = require('../models/products')
// const Cart = require('../models/cart')

exports.getAddProduct = (req, res) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  })
}

exports.postAddProduct = async (req, res) => {
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const price = req.body.price
  const description = req.body.description
  try {
    const product = new Product(title, imageUrl, price, description)
    await product.save()
    res.redirect('/admin/products')
  } catch (e){
    res.redirect('/admin/add-product')
  }
}

exports.getProducts = async (req, res) => {
  const products = await Product.fetchAll()
  res.render('admin/products', {
    pageTitle: 'All admin products',
    products: products,
    path: '/admin/products'
  })
}

// exports.getEditProduct = async (req, res) => {
//   const id = req.params.id
//   const product = await Product.findById(id)
//   if (!product)
//     return res.redirect('/')
//   res.render('admin/add-product', {
//     pageTitle: 'Edit Product',
//     path: '/admin/edit-product',
//     editing: true,
//     product: product
//   })
// }

// exports.addOrUpdateProduct = async (req, res) => {
//   if (req.body.title && req.body.title.trim().length > 0) {
//     if (req.query._id) {
//       const product = await Product.findAndUpdate({ ...req.body, _id: req.query._id })
//       if (!product)
//         res.redirect('/admin/add-product')
//     } else {
//       const product = new Product(req.body)
//       product.save()
//     }
//     res.redirect('/admin/products')
//   } else {
//     res.redirect('/admin/add-product')
//   }
// }


// exports.deleteProduct = async (req, res) => {
//   if (req.query._id) {
//     await Product.findByIdAndDelete(req.query._id)
//     Cart.findByIdAndRemove(req.query._id)
//   }
//   res.redirect('/admin/products')
// }