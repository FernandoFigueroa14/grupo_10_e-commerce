const path = require('path');
const fs = require('fs');

const productsJSON = path.resolve('./data/dataProducts.json');
const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));

const categoriesController = {
    women: (req, res) => {
        const womenProducts = products.filter(product => product.category === 'female');

        res.render(path.resolve('views/categories/women'), {products: womenProducts});
    }, 
    men: (req, res) => {
        const menProducts = products.filter(product => product.category === 'male');

        res.render(path.resolve('views/categories/men'), {products: menProducts});
    },
    kids: (req, res) => {
        const kidsProducts = products.filter(product => product.category === 'kid');

        res.render(path.resolve('views/categories/kids'), {products: kidsProducts});
    },
}

module.exports = categoriesController;