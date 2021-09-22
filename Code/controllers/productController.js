let db = require('../database/models')
const { validationResult } = require('express-validator')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const modelProduct = require('../models/modelProduct')

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
    // res.render(pathDetailProductView, { product: modelProduct.searchProductById(req.params.id), toThousand: toThousand })
  },
  showFormCreate: (req, res) => {
    res.render(pathCreateProductView)
  },
  processCreate: (req, res) => {
    const validationResults = validationResult(req)

    if (!validationResults.isEmpty()) {
      res.render(pathCreateProductView, { errors: validationResults.mapped(), oldData: req.body })
    } else {
      modelProduct.saveProduct(req)
      res.redirect('/')
    }
  },
  showFormDelete: (req, res) => {
    res.render(pathDeleteProductView)
  },
  delete: (req, res) => {
    const idProduct = req.body.id

    if (modelProduct.searchProductById(idProduct)) {
      modelProduct.writeProductsInJSON(modelProduct.discardProductById(idProduct))
      res.redirect('/')
    } else {
      res.render(pathDeleteProductView, { id: idProduct })
    }
  },
  showFormEditId: (req, res) => {
    res.render(pathSelectProductToEditByIdView, { id: '' })
  },
  editProductById: (req, res) => {
    const idProduct = req.query.id
    const productEdit = modelProduct.searchProductById(idProduct)

    if (productEdit) {
      res.render(pathSelectedProductToEditView, { product: productEdit })
    } else {
      res.render(pathSelectProductToEditByIdView, { id: idProduct })
    }
  },
  updateProduct: (req, res) => {
    const validationsResults = validationResult(req)

    if (!validationsResults.isEmpty()) {
      res.render(pathSelectedProductToEditView, { product: modelProduct.searchProductById(req.body.id), errors: validationsResults.mapped(), oldData: req.body })
    } else {
      modelProduct.updateProduct(req)
      res.redirect('/')
    }
  },
  search: (req, res) => {
    if (/\s/.exec(req.query.keyWord) || req.query.keyWord == '') {
      res.render(pathSearchProducts, { products: '', keyWord: req.query.keyWord, toThousand: toThousand })
    } else {
      res.render(pathSearchProducts, { products: modelProduct.searchProductByFieldIncludesValue('name', req.query.keyWord.toLowerCase()), keyWord: req.query.keyWord, toThousand: toThousand })
    }
  }
}

module.exports = productController