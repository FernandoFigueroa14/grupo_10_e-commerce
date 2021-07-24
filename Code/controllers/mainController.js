const path = require('path');
const fs = require('fs');

const productsJSON = path.resolve('./data/dataProducts.json');
const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
    home: (req, res) => {
        res.render(path.resolve('views/home'), {products: products, toThousand: toThousand});
    }
}

module.exports = controller;