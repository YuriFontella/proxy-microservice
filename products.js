'use strict'

const app = require('express')()

app.get('/products', (req, res) => res.send('Hello Products API'))

app.listen(6600, () => console.log('Products API listening on port 6600'))
