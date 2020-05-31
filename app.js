const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const { mongoConnect } = require('./utils/database')
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

const publicDirPath = path.join(__dirname, 'public')

const app = express()

app.use(express.static(publicDirPath))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))

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

