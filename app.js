const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World\n\r')
    console.log('body: ', req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
