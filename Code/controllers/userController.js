const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator'); 
const modelUser = require('../models/modelUser');

const userController = {
    login: (req, res) => {
        res.render(path.resolve('views/userViews/login'));
    },
    processLogin: (req, res) => {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            console.log(resultValidation);
            res.render(path.resolve('views/userViews/login'), {errors: resultValidation.mapped(), oldData: req.body});
        } else {
            res.send('login');
        }
        modelUser.create(req.body);
    },
    register: (req, res) => {
        res.render(path.resolve('views/userViews/register'));
    }, 
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            res.render(path.resolve('views/userViews/register'), {errors: resultValidation.mapped(), oldData: req.body});
        } else {
            res.send('No hay errores en los datos introducidos');
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