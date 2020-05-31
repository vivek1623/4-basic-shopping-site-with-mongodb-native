const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const { mongoConnect } = require('./utils/database')
const User = require('./models/user')
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

const publicDirPath = path.join(__dirname, 'public')

const app = express()

app.use(express.static(publicDirPath))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(async (req, res, next) => {
  try {
    // const user = new User('vivasi', 'vivasi1623@gmail.com', { items: [] })
    // user.save()
    const user = await User.findById('5ed3c661ab6c0952c258015f')
    req.user = new User(user.name, user.email, user.cart, user._id)
    next()
  } catch (e) {
    console.log('error', e)
  }
})

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use((req, res, next) => {
  res.render('404', { pageTitle: '404', path: '/404' })
})

mongoConnect(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server is up on port ${process.env.PORT}`)
  })
})

