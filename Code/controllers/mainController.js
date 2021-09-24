const path = require('path')
// const fs = require('fs')

const db = require('../database/models')
// const productsJSON = path.resolve('./data/dataProducts.json')
// const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'))
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const controller = {
  home: (req, res, next) => {
    db.Products.findAll()
      .then((productsDB) => {
        // console.log(productsDB)
        res.render(path.resolve('views/home'), { products: productsDB, toThousand: toThousand })
      }).catch((error) => {
        next(error)
      })
  }
}

module.exports = controller