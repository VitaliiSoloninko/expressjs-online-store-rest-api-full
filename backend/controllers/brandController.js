const { Brand } = require('../models/models')
const ApiError = require('../error/ApiError')
class BrandController {
	async create(req, res) {
		const { name } = req.body
		const brand = await Brand.create({ name })
		return res.json({ brand })
	}

	async getAll(req, res) {
		const brands = await Brand.findAll()
		return res.json(brands)
	}

	async getOne(req, res) {
		const { id } = req.params
		const brand = await Brand.findOne({
			where: { id },
		})
		return res.json(brand)
	}

	async update(req, res) {
		const brand = req.body
		const updatedBrand = await Brand.update(brand.id, brand, {
			new: true,
		})
		return res.json(updatedBrand)
	}

	async delete(req, res) {
		try {
		} catch (e) {
			res.status(500).json(e)
		}
	}
}

module.exports = new BrandController()
