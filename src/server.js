require('dotenv').config()
const express = require('express')
const app = express()
const connectDatabase = require('./database/db')
const routes = require('./routes')

app.use(express.json())
app.use(routes)

connectDatabase()
    .then(() => app.listen(3000, () => console.log('Server running on: http://localhost:3000')))
    .catch((err) => console.log(err))
