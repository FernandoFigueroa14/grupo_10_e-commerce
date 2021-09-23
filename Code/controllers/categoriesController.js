const path = require('path')
// const fs = require('fs')
const { Op } = require('sequelize')

let db = require('../database/models')

// const productsJSON = path.resolve('./data/dataProducts.json')
// const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'))
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const categoriesController = {
  women: (req, res, next) => {
    RenderCategory('female', 'women', res, next)
    // const womenProducts = products.filter(product => product.category === 'female')
    // res.render(path.resolve('views/categories/women'), { products: womenProducts, toThousand: toThousand })
  },
  men: (req, res, next) => {
    RenderCategory('male', 'men', res, next)
    // const menProducts = products.filter(product => product.category === 'male')
    // res.render(path.resolve('views/categories/men'), { products: menProducts, toThousand: toThousand })
  },
  kids: (req, res, next) => {
    RenderCategory('kid', 'kids', res, next)
    // const kidsProducts = products.filter(product => product.category === 'kid')
    // res.render(path.resolve('views/categories/kids'), { products: kidsProducts, toThousand: toThousand })
  }
}

const RenderCategory = (category, view, res, next) => {
  db.Products.findAll({
    where: {
      category: { [Op.eq]: category }
    }
  })
    .then((womenProducts) => {
      res.render(path.resolve('views/categories/' + view), { products: womenProducts, toThousand: toThousand })
    })
    .catch((error) => {
      next(error)
    })
}

module.exports = categoriesController