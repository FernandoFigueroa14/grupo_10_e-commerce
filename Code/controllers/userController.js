const path = require('path');

const userController = {
    productos: function(req, res){
        let products = [
            {
                imagen: '/images/producto-prueba.jpg',
                nombre: 'Playera NodeJS',
                precio: 1200,
            },
            {
                imagen: '/images/producto-prueba.jpg',
                nombre: 'Playera NodeJS',
                precio: 1200,
            },
            {
                imagen: '/images/producto-prueba.jpg',
                nombre: 'Playera NodeJS',
                precio: 1200,
            },
            {
                imagen: '/images/producto-prueba.jpg',
                nombre: 'Playera NodeJS',
                precio: 1200,
            },
            {
                imagen: '/images/producto-prueba.jpg',
                nombre: 'Playera NodeJS',
                precio: 1200,
            },
            {
                imagen: '/images/producto-prueba.jpg',
                nombre: 'Playera NodeJS',
                precio: 1200,
            }
         ];
         res.render(path.resolve('views/userViews/userProductos'),{products: products});
    }
};

module.exports = userController;