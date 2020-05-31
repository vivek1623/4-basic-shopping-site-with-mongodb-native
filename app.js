const express = require('express')

const port = 1623

const app = express()


app.listen(port, () => {
  console.log(`server is up on port ${port}`)
})