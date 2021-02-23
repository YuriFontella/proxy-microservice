'use strict'

const app = require('express')()

app.get('/users', (req, res) => res.send('Hello Users API'))

app.listen(5500, () => console.log('Users API listening on port 5500'))
