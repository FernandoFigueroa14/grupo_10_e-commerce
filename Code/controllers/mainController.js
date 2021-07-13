const path = require('path');

const controller = {
    home: (req, res) => {
        res.render(path.resolve('views/home'));
    },
    producto: (req, res) => {
        res.render(path.resolve('views/producto'));
    },
    login: (req, res) => {
        res.render(path.resolve('views/login'));
    },
    register: (req, res) => {
        res.render(path.resolve('views/register'));
    },
    cart: (req, res) => {
        res.render(path.resolve('views/carrito'));
    }
}

module.exports = controller;