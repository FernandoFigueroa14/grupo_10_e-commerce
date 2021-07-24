const path = require('path');
const fs = require('fs');

const pathProductsJSON = path.resolve('./data/dataProducts.json');
const products = JSON.parse(fs.readFileSync(pathProductsJSON, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


const productController = {
    detail: (req, res) => {
        const product = products.find(product => product.id === parseInt(req.params.id));
        
        res.render(path.resolve('views/products/detailProduct'), {product: product, toThousand: toThousand});
    }, 
    showFormCreate: (req, res) => {
        res.render(path.resolve('views/products/createProduct'));
    },
    create: (req, res) => {
        const newProduct = {
            id: Date.now(),
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            img: req.file ? req.file.filename : "producto-prueba.jpg" 
        };

        products.push(newProduct);
        fs.writeFileSync(pathProductsJSON, JSON.stringify(products, null, 2));
        res.redirect('/');
    }, 
    showFormDelete: (req, res) => {
        res.render(path.resolve('views/products/deleteProduct'));
    },
    delete: (req, res) => {
        const productsFiltereds = products.filter(product => product.id !== parseInt(req.body.id));

        fs.writeFileSync(pathProductsJSON, JSON.stringify(productsFiltereds, null, 2));
        res.redirect('/');
    }
};

module.exports = productController;