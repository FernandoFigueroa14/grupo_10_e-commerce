const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');

const productsJSON = path.resolve('./data/dataProducts.json');
const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));

const userController = {
    login: (req, res) => {
        res.render(path.resolve('views/userViews/login'));
    },
    register: (req, res) => {
        res.render(path.resolve('views/userViews/register'));
    }, 
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            res.render(path.resolve('views/userViews/register'), {errors: resultValidation.mapped(), oldData: req.body});
        }
    }, 
    recoverPassword: (req, res) => {
        res.render(path.resolve('views/userViews/recoverPassword'));
    },
    cart: (req, res) => {
        res.render(path.resolve('views/carrito'));
    }
};

module.exports = userController;