const { ObjectId } = require('mongodb')
const { getDB } = require('../utils/database')

class Order {
  constructor(items, userId, userName) {
    this.items = items
    this.user = {
      _id: new ObjectId(userId),
      name: userName
    }
  }

  save() {
    const db = getDB()
    return db.collection('orders').insertOne(this)
  }
}

module.exports = Order