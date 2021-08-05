const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');

const pathProductsJSON = path.resolve('./data/dataProducts.json');
const products = JSON.parse(fs.readFileSync(pathProductsJSON, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const modelProduct = require('../models/modelProduct');

const pathDetailProductView = '../views/products/detailProduct';
const pathCreateProductView = '../views/products/createProduct';
const pathDeleteProductView = '../views/products/deleteProduct';
const pathSelectProductToEditByIdView = '../views/products/editProductSelectId';
const pathSelectedProductToEditView = '../views/products/editProductForm';
const pathSearchProducts = '../views/products/searchProduct';

const productController = {
    detail: (req, res) => {
        res.render(pathDetailProductView, {product: modelProduct.searchProductById(req.params.id), toThousand: toThousand});
    }, 
    showFormCreate: (req, res) => {
        res.render(pathCreateProductView);
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
            res.render(pathCreateProductView, {errors: validationResults.mapped(), oldData: req.body});
        } else {
            products.push(newProduct);
            fs.writeFileSync(pathProductsJSON, JSON.stringify(products, null, 2));
            res.redirect('/');
        }
    }, 
    showFormDelete: (req, res) => {
        res.render(pathDeleteProductView);
    },
    delete: (req, res) => {
        if (modelProduct.searchProductById(req.body.id)) {
            fs.writeFileSync(pathProductsJSON, JSON.stringify(modelProduct.filterProductsById(req.body.id), null, 2));
            res.redirect('/');
        } else {
            res.render(pathDeleteProductView, {id: req.body.id});
        }
    }, 
    showFormEditId: (req, res) => {
        res.render(pathSelectProductToEditByIdView, {id: ''});
    }, 
    editProductById: (req, res) => {
        const productEdit = modelProduct.searchProductById(req.query.id);

        if (productEdit) {
            res.render(pathSelectedProductToEditView, {product: productEdit});
        } else {
            res.render(pathSelectProductToEditByIdView, {id: req.query.id});
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

        const filterProducts = modelProduct.filterProductsById(req.body.id)
		filterProducts.push(updatedProduct);
		fs.writeFileSync(pathProductsJSON, JSON.stringify(filterProducts, null, 2));
		res.redirect('/');
    }, 
    search: (req, res) => {
        if (/\s/.exec(req.query.keyWord) || req.query.keyWord == '') {
            res.render(pathSearchProducts, {products: '', keyWord: req.query.keyWord, toThousand: toThousand});
        }

        const filterProducts = products.filter(product => product.name.toLowerCase().includes(req.query.keyWord.toLowerCase()));

        res.render(pathSearchProducts, {products: filterProducts, keyWord: req.query.keyWord, toThousand: toThousand});
    }
};

module.exports = productController;