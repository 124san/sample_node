const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('root'))

app.listen(port, () => console.log(`My app listening on port ${port}!`))