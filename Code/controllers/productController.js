const path = require('path');
const fs = require('fs');

const pathProductsJSON = path.resolve('./data/dataProducts.json');
const products = JSON.parse(fs.readFileSync(pathProductsJSON, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


const productController = {
    detail: (req, res) => {
        const product = products.find(product => product.id === parseInt(req.params.id));
        
        res.render(path.resolve('views/detalleProducto'), {product: product, toThousand: toThousand});
    }, 
    showForm: (req, res) => {
        res.render(path.resolve('views/createProduct'));
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
        fs.writeFileSync(pathProductsJSON, JSON.stringify(products));
        res.redirect('/');
    }
};

module.exports = productController;