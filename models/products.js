const { ObjectId } = require('mongodb')
const { getDB } = require('../utils/database')
class Product {
  constructor(title, imageUrl, price, description, id) {
    this.title = title
    this.price = price
    this.description = description
    this.imageUrl = imageUrl
    this._id = id ? new ObjectId(id) : null
    // this.userId = userId
  }

  save() {
    const db = getDB()
    return db.collection('products').insertOne(this)
  }

  static fetchAll(){
    const db = getDB()
    return db.collection('products').find().toArray()
  }
}

module.exports = Product
