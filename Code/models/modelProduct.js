const fs = require('fs');
const path = require('path');

const pathProductsJSON = path.resolve('data/dataProducts.json');

const modelProduct = {
    getProducts: function() {
        return JSON.parse(fs.readFileSync(pathProductsJSON, 'utf-8'));
    },
    searchProductById: function(idProduct) {
        return this.getProducts().find(product => product.id == parseInt(idProduct, 10));
    },
    discardProductById: function(idProductToIgnore) {
        return this.getProducts().filter(product => product.id != parseInt(idProductToIgnore, 10));
    }, 
    saveProduct: function(req) {
        const newProduct = req.body;
        const allProducts = this.getProducts();

        newProduct.id = Date.now();
        newProduct.img = req.file ? req.file.filename : "producto-prueba.jpg" 
        allProducts.push(newProduct);
        this.writeProductsInJSON(allProducts);
    }, 
    writeProductsInJSON: function(products) {
        fs.writeFileSync(pathProductsJSON, JSON.stringify(products, null, 2));
    }
};

module.exports = modelProduct;