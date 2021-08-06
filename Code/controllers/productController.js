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

        if (!validationResults.isEmpty()) {
            res.render(pathCreateProductView, {errors: validationResults.mapped(), oldData: req.body});
        } else {
            modelProduct.saveProduct(req);
            res.redirect('/');
        }
    }, 
    showFormDelete: (req, res) => {
        res.render(pathDeleteProductView);
    },
    delete: (req, res) => {
        const idProduct = req.body.id;

        if (modelProduct.searchProductById(idProduct)) {
            modelProduct.writeProductsInJSON(modelProduct.discardProductById(idProduct));
            res.redirect('/');
        } else {
            res.render(pathDeleteProductView, {id: idProduct});
        }
    }, 
    showFormEditId: (req, res) => {
        res.render(pathSelectProductToEditByIdView, {id: ''});
    }, 
    editProductById: (req, res) => {
        const idProduct = req.query.id;
        const productEdit = modelProduct.searchProductById(idProduct);

        if (productEdit) {
            res.render(pathSelectedProductToEditView, {product: productEdit});
        } else {
            res.render(pathSelectProductToEditByIdView, {id: idProduct});
        }
    }, 
    update: (req, res) => {
        const idProduct = req.body.id;
        const product = modelProduct.searchProductById(idProduct);
        const updatedProduct = {
            id: parseInt(idProduct, 10),
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            img: req.file ? req.file.filename : product.img 
        };

        const filterProducts = modelProduct.discardProductById(idProduct);
		filterProducts.push(updatedProduct);
        modelProduct.writeProductsInJSON(filterProducts);
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