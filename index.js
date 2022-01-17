const express = require('express')
const app = express()

app.get('/', (req,res) => {
    return res.send('It\'s one')
})

app.listen(3000)