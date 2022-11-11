const express = require('express')
const product = require('./api/product')

const app = express()

app.use("/api/product", product)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))