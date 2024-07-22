const { Type } = require('../models/models')
const ApiError = require('../error/ApiError')
const { where } = require('sequelize')

class TypeController {
	async create(req, res) {
		try {
			const { name } = req.body
			const type = await Type.create({ name })
			return res.json(type)
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async getAll(req, res) {
		try {
			const types = await Type.findAll()
			return res.json(types)
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async getOne(req, res) {
		try {
			const { id } = req.params
			const type = await Type.findOne({ where: { id } })
			if (type === null) {
				res.status(400).json({ message: 'ID not specified' })
			} else {
				res.json(type)
			}
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async update(req, res) {
		try {
			const type = req.body
			const updatedType = await Type.update({ id }, { where: { name } })
			return res.json(updatedType)
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async delete(req, res) {
		const { id } = req.params
		const type = await Type.destroy({ where: { id } })
		return res.json(type)
	}
}

module.exports = new TypeController()
