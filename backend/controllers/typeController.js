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
				res.status(400).json({ message: `No type with ID=${id}` })
			} else {
				res.json(type)
			}
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async update(req, res) {
		try {
			const { id } = req.params
			const updatedType = await Type.update(req.body, { where: { id } })
			if (updatedType == 1) {
				res.send({
					message: `TYPE with ID=${id} updated`,
				})
			} else {
				res.send({
					message: `No TYPE with ID=${id}`,
				})
			}
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async delete(req, res) {
		try {
			const { id } = req.params
			const deletedType = await Type.destroy({ where: { id } })
			if (deletedType == 1) {
				res.send({
					message: `TYPE with ID=${id} deleted`,
				})
			} else {
				res.send({
					message: `No TYPE with ID=${id}`,
				})
			}
		} catch (e) {
			res.status(500).json(e)
		}
	}
}

module.exports = new TypeController()
