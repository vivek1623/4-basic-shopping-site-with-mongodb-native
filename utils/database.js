const { MongoClient } = require('mongodb')

let _db;

const mongoConnect = callback => {
  MongoClient.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true
  }).then(client => {
    console.log('Database Connected')
    _db = client.db()
    callback()
  }).catch(error => {
    console.log('Error', error)
    throw error
  })
}

const getDB = () => {
  if (_db)
    return _db
  throw 'No database found'
}

module.exports = {
  mongoConnect,
  getDB
}