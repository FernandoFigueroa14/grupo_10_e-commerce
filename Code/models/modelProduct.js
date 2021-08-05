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
    filterProductsById: function(idProductToIgnore) {
        return this.getProducts().filter(product => product.id != parseInt(idProductToIgnore));
    }
};

module.exports = modelProduct;