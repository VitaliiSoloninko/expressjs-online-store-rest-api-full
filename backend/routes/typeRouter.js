const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)
router.get('/:id', typeController.getOne)
router.put('/:id', typeController.update)
router.delete('/:id', typeController.delete)

module.exports = router
