let db = require('../database/models')
const { Op } = require('sequelize')
const { validationResult } = require('express-validator')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const pathDetailProductView = '../views/products/detailProduct'
const pathCreateProductView = '../views/products/createProduct'
const pathDeleteProductView = '../views/products/deleteProduct'
const pathSelectProductToEditByIdView = '../views/products/editProductSelectId'
const pathSelectedProductToEditView = '../views/products/editProductForm'
const pathSearchProducts = '../views/products/searchProduct'

const productController = {
  detail: (req, res, next) => {
    db.Products.findByPk(req.params.id)
      .then((product) => {
        res.render(pathDetailProductView, { product: product, toThousand: toThousand })
      })
      .catch((error) => {
        next(error)
      })
  },
  showFormCreate: (req, res) => {
    res.render(pathCreateProductView)
  },
  processCreate: (req, res) => {
    const validationResults = validationResult(req)
    if (!validationResults.isEmpty()) {
      res.render(pathCreateProductView, { errors: validationResults.mapped(), oldData: req.body })
    } else {
      db.Products.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        img: req.file.filename,
        size: req.body.size
      })
        .then(() => {
          return res.redirect('/')})
        .catch(error => res.send(error))
    }
  },
  showFormDelete: (req, res) => {
    res.render(pathDeleteProductView)
  },
  delete: (req, res) => {
    const idProduct = req.body.id
    db.Products.findByPk(idProduct)
      .then(() => {
        db.Products.destroy({
          where: { product_id: idProduct }
        })
        res.redirect('/')
      })
      .catch(() => {
        res.render(pathDeleteProductView, { id: idProduct })
      })
  },
  showFormEditId: (req, res) => {
    res.render(pathSelectProductToEditByIdView, { id: '' })
  },
  editProductById: (req, res) => {
    const idProduct = req.query.id
    db.Products.findByPk(idProduct)
      .then((productEdit) => {
        if (productEdit) {
          res.render(pathSelectedProductToEditView, { product: productEdit })
        } else {
          res.render(pathSelectProductToEditByIdView, { id: idProduct })
        }
      })
  },
  updateProduct: (req, res) => {
    const validationsResults = validationResult(req)
    console.log(req.body.name)
    if (!validationsResults.isEmpty()) {
      db.Products.findByPk(req.body.id)
        .then((productEdit) => {
          res.render(pathSelectedProductToEditView, { product: productEdit, errors: validationsResults.mapped(), oldData: req.body })
        })
    } else {
      db.Products.findByPk(req.body.id)
        .then((productEdit) => {
          const img_product = req.file ? req.file.filename : productEdit.img
          db.Products.update({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            img: img_product,
            size: req.body.size
          }, { where: { product_id: req.body.id } })
        })
      res.redirect('/home')
    }
  },
  search: (req, res, next) => {
    const tallas = ['CH', 'ch', 'M', 'm', 'g', 'G', 'XL', 'xl']
    if (/\s/.exec(req.query.keyWord) || req.query.keyWord === '') {
      res.render(pathSearchProducts, { products: '', keyWord: req.query.keyWord, toThousand: toThousand })
    } else if (tallas.includes(req.query.keyWord)) {
      db.Products.findAll({
        where: {
          size: { [Op.substring]: req.query.keyWord.toUpperCase() }
        }
      })
        .then((products) => {
          res.render(pathSearchProducts, { products: products, keyWord: 'Productos talla ' + req.query.keyWord.toUpperCase(), toThousand: toThousand })
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      db.Products.findAll({
        where: {
          name: { [Op.substring]: req.query.keyWord.toLowerCase() }
        }
      })
        .then((productsDB) => {
          if (/^[0-9]+$/.exec(req.query.keyWord)) {
            db.Products.findByPk(parseInt(req.query.keyWord))
              .then((productsDB) => {
                if (productsDB) {
                  res.render(pathSearchProducts, { products: [productsDB.dataValues], keyWord: req.query.keyWord, toThousand: toThousand })
                } else {
                  res.render(pathSearchProducts, { products: [], keyWord: req.query.keyWord, toThousand: toThousand })
                }
              })
              .catch((error) => {
                console.log(error)
              })
          } else {
            res.render(pathSearchProducts, { products: productsDB, keyWord: req.query.keyWord, toThousand: toThousand })
          }
        })
        .catch((error) => {
          next(error)
        })
    }
  }
}

module.exports = productController