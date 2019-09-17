const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.sendFile("index.html"))

app.listen(port, () => console.log(`My app listening on port ${port}!`))