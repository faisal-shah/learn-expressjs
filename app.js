const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}));
const port = 3000

app.post('/', (req, res) => {
    res.send('Hello World\n\r')
    console.log('body: ', req.body)
    console.log(req.body.say, req.body.to)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
