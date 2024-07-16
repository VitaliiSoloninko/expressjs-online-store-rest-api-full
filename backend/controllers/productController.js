const uuid = require('uuid')
const path = require('path')
const { Product } = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
	async create(req, res, next) {
		try {
			const { name, price, brandId, typeId, info } = req.body
			const { img } = req.files
			let fileName = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', fileName))

			const product = await Product.create({
				name,
				price,
				brandId,
				typeId,
				img: fileName,
			})

			return res.json(product)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async getAll(req, res) {
		let { brandId, typeId, limit, page } = req.query
		page = page || 1
		limit = limit || 9
		let offset = page * limit - limit

		let products
		if (!brandId && !typeId) {
			products = await Product.findAll({ limit, offset })
		}
		if (brandId && !typeId) {
			products = await Product.findAll({ where: { brandId }, limit, offset })
		}
		if (!brandId && typeId) {
			products = await Product.findAll({ where: { typeId }, limit, offset })
		}
		if (brandId && typeId) {
			products = await Product.findAll({
				where: { brandId, typeId },
				limit,
				offset,
			})
		}
		return res.json(products)
	}

	async getOne(req, res) {}
}

module.exports = new ProductController()
