const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://vitor:g72tkm12@cluster0-d1kzp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
})


app.use(express.json())
app.use(routes)

app.listen(3333)