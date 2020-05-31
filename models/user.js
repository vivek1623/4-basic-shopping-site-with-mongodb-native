const { ObjectId } = require('mongodb')
const { getDB } = require('../utils/database')

class User {
  constructor(name, email, cart, id) {
    this.name = name
    this.email = email
    this.cart = cart //{items:[{productId: "", quantity: 0}]}
    this._id = id
  }

  save() {
    const db = getDB()
    return db.collection('users').insertOne(this)
  }

  addToCart(productId) {
    const index = this.cart.items.findIndex(item => item.productId.toString() === productId.toString())
    const updatedCartItems = [...this.cart.items]
    if (index === -1)
      updatedCartItems.push({ productId: new ObjectId(productId), quantity: 1 })
    else
      updatedCartItems[index].quantity = updatedCartItems[index].quantity + 1
    const updatedCart = { items: updatedCartItems }
    const db = getDB()
    return db.collection('users').updateOne({ _id: new Object(this._id) }, { $set: { cart: updatedCart } })
  }

  static findById(userId) {
    const db = getDB()
    return db.collection('users').findOne({ _id: ObjectId(userId) })
  }
}

module.exports = User
