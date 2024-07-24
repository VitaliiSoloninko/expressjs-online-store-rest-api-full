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
		const { id } = req.params
		const updatedBrand = await Brand.update(req.body, { where: { id } })
		if (updatedBrand == 1) {
			res.send({
				message: `BRAND with ID=${id} updated`,
			})
		} else {
			res.send({
				message: `No BRAND with ID=${id}`,
			})
		}
	}

	async delete(req, res) {
		const { id } = req.params
		const deletedBrand = await Brand.destroy({ where: { id } })
		if (deletedBrand == 1) {
			res.send({
				message: `BRAND with ID=${id} deleted`,
			})
		} else {
			res.send({
				message: `No BRAND with ID=${id}`,
			})
		}
	}
}

module.exports = new BrandController()
