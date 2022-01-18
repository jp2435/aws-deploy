const express = require('express')
const app = express()

app.get('/', (req,res) => {
    return res.send('It\'s one')
})

app.get('/update', (req,res) => {
    return res.send('Update route')
})

app.listen(3000)