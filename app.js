const express = require('express')
const path = require('path')

const publicDirPath = path.join(__dirname, 'public')

const port = 1623

const app = express()

app.use(express.static(publicDirPath))

app.set('view engine', 'ejs')
app.set('views', 'views')



app.use((req, res, next) => {
  res.render('404', { pageTitle: '404', path: '/404' })
})

app.listen(port, () => {
  console.log(`server is up on port ${port}`)
})