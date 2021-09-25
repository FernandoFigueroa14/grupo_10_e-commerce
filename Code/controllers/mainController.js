const path = require('path')

const db = require('../database/models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const controller = {
  home: async (req, res) => {
    let productsDB = []
    try {
      productsDB = await db.Products.findAll()
    } catch (error) {
      console.log(error.message)
    }
    res.render(path.resolve('views/home'), { products: productsDB, toThousand: toThousand })
  }
}

module.exports = controller