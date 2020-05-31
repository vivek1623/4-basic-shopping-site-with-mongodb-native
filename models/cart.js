// const fs = require('fs')
// const path = require('path')

// const cartFilePath = path.join(__dirname, '../', 'database', 'cart.json')

// const readCartFromFile = callback => {
//   fs.readFile(cartFilePath, (err, fileContent) => {
//     let cart = { products: [], totalPrice: 0 }
//     if (!err)
//       cart = JSON.parse(fileContent)
//     callback(cart)
//   })
// }

// const writeCartInFile = cart => {
//   fs.writeFile(cartFilePath, JSON.stringify(cart), err => {
//     console.log(err)
//   })
// }

// module.exports = class Cart {

//   static fetchAll() {
//     return new Promise(readCartFromFile)
//   }

//   static addProductToCart(product) {
//     return new Promise(resolve => {
//       readCartFromFile(cart => {
//         const index = cart.products.findIndex(item => item._id === product._id)
//         if (index !== -1)
//           cart.products[index].quantity = Number(cart.products[index].quantity) + 1
//         else {
//           product.quantity = 1
//           cart.products.push(product)
//         }
//         cart.totalPrice = Number(cart.totalPrice) + Number(product.price)
//         writeCartInFile(cart)
//         resolve(product)
//       })
//     })
//   }

//   static findByIdAndRemove(_id) {
//     readCartFromFile(cart => {
//       const index = cart.products.findIndex(product => product._id === _id)
//       if (index !== -1) {
//         cart.totalPrice = cart.totalPrice - cart.products[index].price * cart.products[index].quantity
//         cart.products = cart.products.filter(product => product._id !== _id)
//         writeCartInFile(cart)
//       }
//     })
//   }
// }