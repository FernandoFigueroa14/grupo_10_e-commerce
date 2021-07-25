const path = require('path');
const fs = require('fs');

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
    create: (req, res) => {
        const newProduct = {
            id: Date.now(),
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            img: req.file ? req.file.filename : "producto-prueba.jpg" 
        };

        products.push(newProduct);
        fs.writeFileSync(pathProductsJSON, JSON.stringify(products, null, 2));
        res.redirect('/');
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

        const filterProduct = products.filter(product => product.id != parseInt(req.body.id)); 
		filterProduct.push(updatedProduct);
		fs.writeFileSync(pathProductsJSON, JSON.stringify(filterProduct, null, 2));
		res.redirect('/');
    }
};

module.exports = productController;