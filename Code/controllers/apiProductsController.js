const db = require('../database/models')
const path = require('path')
const { Op } = require('sequelize')

const getData = async (category) => {
  return await db.Products.findAll({ where: { category: { [Op.eq]: category } } })
}

const apiProductsController = {
  getProducts: async (req, res) => {
    const allProducts = await db.Products.findAll()
    const men = await getData('male')
    const women = await getData('female')
    const kids = await getData('kid')

    const products = allProducts.map((product) => {
      const { product_id, name, description, category } = product.dataValues
      const detail = 'http://localhost:3001/api/products/' + product_id
      return { product_id, name, description, detail, category }
    })

    res.json({
      meta: {
        status: 200,
        total: allProducts.length,
        url: '/api/users'
      },
      men: {
        total: men.length,
      },
      women: {
        total: women.length,
      },
      kids: {
        total: kids.length,
      },
      data: products
    })
  },
  getProduct: async (req, res) => {
    const product = await db.Products.findByPk(req.params.id)
    product.dataValues.imgProduct = 'http://localhost:3001/api/products/img/' + product.dataValues.img
    res.json({
      meta: {
        status: 200,
        total: product.length,
        url: '/api/users/' + product.dataValues.product_id
      },
      data: product
    })
  },
  getImg: (req, res) => {
    res.sendFile(path.resolve('public/images/img-products/' + req.params.img))
  }
}

module.exports = apiProductsController