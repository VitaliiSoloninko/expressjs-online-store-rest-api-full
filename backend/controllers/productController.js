const uuid = require('uuid')

class ProductController {
	async create(req, res) {
		const { name, price, brandId, typeId, info } = req.body
		const { img } = req.files
		let fileName = uuid.v4() + '.jpg'
	}

	async getAll(req, res) {}

	async getOne(req, res) {}
}

module.exports = new ProductController()
