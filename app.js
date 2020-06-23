
const express = require('express')
const app = express()
const port = 3000
const chalk = require('chalk')

// const debug = require('debug')('app')
//change console.log to debug 

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

