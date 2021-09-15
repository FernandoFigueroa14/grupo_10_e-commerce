const path = require('path')
const fs = require('fs')

const productsJSON = path.resolve('./data/dataProducts.json')
const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'))
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const categoriesController = {
	women: (req, res) => {
		const womenProducts = products.filter(product => product.category === 'female')

		res.render(path.resolve('views/categories/women'), {products: womenProducts, toThousand: toThousand})
	}, 
	men: (req, res) => {
		const menProducts = products.filter(product => product.category === 'male')

		res.render(path.resolve('views/categories/men'), {products: menProducts, toThousand: toThousand})
	},
	kids: (req, res) => {
		const kidsProducts = products.filter(product => product.category === 'kid')

		res.render(path.resolve('views/categories/kids'), {products: kidsProducts, toThousand: toThousand})
	},
}

module.exports = categoriesController