const path = require('path');

productos = [
    {
        nombre: "Playera node 1",
        precio: "$1250",
    },
    {
        nombre: "Playera node 2",
        precio: "$1350",
    },
    {
        nombre: "Playera node 3",
        precio: "$1450",
    },
    {
        nombre: "Playera node 4",
        precio: "$1550",
    },
    {
        nombre: "Playera node 5",
        precio: "$1650",
    },
    {
        nombre: "Playera node 6",
        precio: "$1750",
    }
];

const controller = {
    home: (req, res) => {
        res.render(path.resolve('views/home'), {productos : productos});
    },
    producto: (req, res) => {
        res.render(path.resolve('views/detalleProducto'));
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