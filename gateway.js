'use strict'

const express = require('express')
const httpProxy = require('express-http-proxy')

const app = express()

const port = 3000

const { USERS_API, PRODUCTS_API } = require('./urls')

const userServiceProxy = httpProxy(USERS_API)
const productsServiceProxy = httpProxy(PRODUCTS_API)

app.get('/', (req, res) => res.send('Hello Gateway API'))

app.get('/users', (req, res, next) => userServiceProxy(req, res, next))
app.get('/products', (req, res, next) => productsServiceProxy(req, res, next))

app.listen(port, () => console.log('Gateway API listening on port 3000'))
