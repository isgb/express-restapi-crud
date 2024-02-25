const express = require('express')
const morgan = require('morgan')

const app = express();
let products = [
    {
        id: 1,
        name: "laptop",
        price: 3000
    }
];

app.use(morgan('dev'));
app.use(express.json());

app.get('/products', (req,res) => {
    res.send('obteniendo productos')
    res.json(products)
})

app.post('/products', (req,res) => {
    // console.log(req.body)
    const newProduct = {...req.body, id: products.length + 1}
    products.push(newProduct)
    res.send('creando productos')
})

app.put('/products/:id', (req,res) => {

    const newData = req.body;
    const productFound = products.find(function(product) {
        return product.id === parseInt(req.params.id)
    })

    if(!productFound) return res.status(404).json({
        message: "Product not found"
    }) 

    const newProducts = products.map(p => p.id === parseInt(req.params.id) ? {...p, ...newData} : p)

    console.log(newProducts)

    res.json({
        message: "Product updated successfully"
    })
})

app.delete('/products/:id', (req,res) => {
    const productFound = products.find(function(product) {
        return product.id === parseInt(req.params.id)
    })

    if(!productFound) return res.status(404).json({
        message: "Product not found"
    }) 

    products = products.filter(product => {
        product.id !== parseInt(req.params.id)
    })

    res.send('borrando productos')
})

app.get('/products/:id', (req,res) => {
    // console.log(req.params.id)
    const productFound = products.find(function(product) {
        return product.id === parseInt(req.params.id)
    })

    if(!productFound) return res.status(404).json({
        message: "Product not found"
    }) 

    // console.log(productFound)
    res.json(productFound)
})

app.listen(3000);
console.log(`SERVER ON PORT ${3000}`)