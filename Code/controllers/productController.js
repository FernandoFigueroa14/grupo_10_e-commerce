const path = require('path');
const fs = require('fs');

const productsJSON = path.resolve('./data/dataProducts.json');
const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));

const productController = {
    detail: (req, res) => {
        const product = products.find(product => product.id === parseInt(req.params.id));
        
        res.render(path.resolve('views/detalleProducto'), {product: product});
    }
};

module.exports = productController;