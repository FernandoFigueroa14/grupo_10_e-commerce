const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');

const pathProductsJSON = path.resolve('./data/dataProducts.json');
const products = JSON.parse(fs.readFileSync(pathProductsJSON, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const productController = {
    detail: (req, res) => {
        const product = products.find(product => product.id == parseInt(req.params.id));
        
        res.render(path.resolve('views/products/detailProduct'), {product: product, toThousand: toThousand});
    }, 
    showFormCreate: (req, res) => {
        res.render(path.resolve('views/products/createProduct'));
    },
    processCreate: (req, res) => {
        const validationResults = validationResult(req);
        const newProduct = {
            id: Date.now(),
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            img: req.file ? req.file.filename : "producto-prueba.jpg" 
        };

        if (!validationResults.isEmpty()) {
            res.render(path.resolve('views/products/createProduct'), {errors: validationResults.mapped(), oldData: req.body});
        } else {
            products.push(newProduct);
            fs.writeFileSync(pathProductsJSON, JSON.stringify(products, null, 2));
            res.redirect('/');
        }
    }, 
    showFormDelete: (req, res) => {
        res.render(path.resolve('views/products/deleteProduct'), {id: ''});
    },
    delete: (req, res) => {
        const productSelected = products.find(product => product.id == parseInt(req.body.id));

        if (productSelected) {
            const productsFiltereds = products.filter(product => product.id != parseInt(req.body.id));
            fs.writeFileSync(pathProductsJSON, JSON.stringify(productsFiltereds, null, 2));
            res.redirect('/');
        } else {
            res.render(path.resolve('views/products/deleteProduct'), {id: req.body.id});
        }
        
    }, 
    showFormEditId: (req, res) => {
        res.render(path.resolve('views/products/editProductSelectId'), {id: ''});
    }, 
    editProductById: (req, res) => {
        const productEdit = products.find(product => product.id == parseInt(req.query.id));

        if (productEdit) {
            res.render(path.resolve('views/products/editProductForm'), {product: productEdit});
        } else {
            res.render(path.resolve('views/products/editProductSelectId'), {id: req.query.id});
        }
    }, 
    update: (req, res) => {
        const product = products.find(product => product.id == parseInt(req.body.id));
        const updatedProduct = {
            id: parseInt(req.body.id, 10),
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            img: req.file ? req.file.filename : product.img 
        };

        const filterProducts = products.filter(product => product.id != parseInt(req.body.id)); 
		filterProducts.push(updatedProduct);
		fs.writeFileSync(pathProductsJSON, JSON.stringify(filterProducts, null, 2));
		res.redirect('/');
    }, 
    search: (req, res) => {
        if (/\s/.exec(req.query.keyWord) || req.query.keyWord == '') {
            res.render(path.resolve('views/products/searchProduct'), {products: '', keyWord: req.query.keyWord, toThousand: toThousand});
        }

        const filterProducts = products.filter(product => product.name.toLowerCase().includes(req.query.keyWord.toLowerCase()));

        res.render(path.resolve('views/products/searchProduct'), {products: filterProducts, keyWord: req.query.keyWord, toThousand: toThousand});
    }
};

module.exports = productController;