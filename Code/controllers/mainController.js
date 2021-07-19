const path = require('path');
const fs = require('fs');

const productsJSON = path.resolve('./data/dataProducts.json');
const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));

const controller = {
    home: (req, res) => {
        res.render(path.resolve('views/home'), {productos : products});
    }
}

module.exports = controller;