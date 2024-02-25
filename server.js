const express = require('express')
const morgan = require('morgan')

const app = express();
const products = [];

app.use(morgan('dev'));

app.get('/products', (req,res) => {
    // res.send('obteniendo productos')
    res.json(products)
})

app.post('/products', (req,res) => {
    res.send('creando productos')
})

app.put('/products', (req,res) => {
    res.send('actualizando productos')
})

app.delete('/products', (req,res) => {
    res.send('borrando productos')
})

app.get('/products/:id', (req,res) => {
    res.send('obteniendo un productos')
})

app.listen(3000);
console.log(`SERVER ON PORT ${3000}`)