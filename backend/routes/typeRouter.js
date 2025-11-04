const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

/**
 * @swagger
 * components:
 *   schemas:
 *     Type:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the type
 *         name:
 *           type: string
 *           description: Type name
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *     TypeInput:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Type name
 */

/**
 * @swagger
 * /api/types:
 *   post:
 *     summary: Create a new type (Admin only)
 *     tags: [Types]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TypeInput'
 *     responses:
 *       200:
 *         description: Type created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Type'
 *       401:
 *         description: Unauthorized - Admin role required
 *       500:
 *         description: Internal server error
 */
router.post('/', checkRole('ADMIN'), typeController.create)

/**
 * @swagger
 * /api/types:
 *   get:
 *     summary: Get all types
 *     tags: [Types]
 *     responses:
 *       200:
 *         description: List of all types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Type'
 *       500:
 *         description: Internal server error
 */
router.get('/', typeController.getAll)

/**
 * @swagger
 * /api/types/{id}:
 *   get:
 *     summary: Get a type by ID
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Type ID
 *     responses:
 *       200:
 *         description: Type found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Type'
 *       400:
 *         description: Type not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', typeController.getOne)

/**
 * @swagger
 * /api/types/{id}:
 *   put:
 *     summary: Update a type by ID
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TypeInput'
 *     responses:
 *       200:
 *         description: Type updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "TYPE with ID=1 updated"
 *       500:
 *         description: Internal server error
 */
router.put('/:id', typeController.update)

/**
 * @swagger
 * /api/types/{id}:
 *   delete:
 *     summary: Delete a type by ID
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Type ID
 *     responses:
 *       200:
 *         description: Type deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "TYPE with ID=1 deleted"
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', typeController.delete)

module.exports = router
