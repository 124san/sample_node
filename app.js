const express = require('express')
const app = express()
const port = 80
const webPath = './var/www/www.124san.com/index.html'

app.get('/', (req, res) => res.sendFile(webPath))

app.listen(port, () => console.log(`My app listening on port ${port}!`))