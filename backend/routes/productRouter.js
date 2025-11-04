const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - brandId
 *         - typeId
 *         - img
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the product
 *         name:
 *           type: string
 *           description: Product name
 *         price:
 *           type: integer
 *           description: Product price
 *         rating:
 *           type: integer
 *           default: 0
 *           description: Product rating
 *         img:
 *           type: string
 *           description: Product image filename
 *         brandId:
 *           type: integer
 *           description: Brand ID
 *         typeId:
 *           type: integer
 *           description: Type ID
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *     ProductInfo:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the product info
 *         title:
 *           type: string
 *           description: Information title
 *         description:
 *           type: string
 *           description: Information description
 *         productId:
 *           type: integer
 *           description: Product ID
 *     ProductWithInfo:
 *       allOf:
 *         - $ref: '#/components/schemas/Product'
 *         - type: object
 *           properties:
 *             info:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProductInfo'
 *     ProductsResponse:
 *       type: object
 *       properties:
 *         count:
 *           type: integer
 *           description: Total number of products
 *         rows:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product with image upload
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - brandId
 *               - typeId
 *               - img
 *             properties:
 *               name:
 *                 type: string
 *                 description: Product name
 *               price:
 *                 type: integer
 *                 description: Product price
 *               brandId:
 *                 type: integer
 *                 description: Brand ID
 *               typeId:
 *                 type: integer
 *                 description: Type ID
 *               img:
 *                 type: string
 *                 format: binary
 *                 description: Product image file
 *               info:
 *                 type: string
 *                 description: JSON string with additional product information
 *                 example: '[{"title":"Color","description":"Red"},{"title":"Size","description":"XL"}]'
 *     responses:
 *       200:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request - invalid data
 */
router.post('/', productController.create)

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products with filtering and pagination
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: brandId
 *         schema:
 *           type: integer
 *         description: Filter by brand ID
 *       - in: query
 *         name: typeId
 *         schema:
 *           type: integer
 *         description: Filter by type ID
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 9
 *         description: Number of products per page
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *     responses:
 *       200:
 *         description: List of products with pagination
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductsResponse'
 */
router.get('/', productController.getAll)

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by ID with detailed information
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product found with detailed information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductWithInfo'
 *       404:
 *         description: Product not found
 */
router.get('/:id', productController.getOne)

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Product name
 *               price:
 *                 type: integer
 *                 description: Product price
 *               brandId:
 *                 type: integer
 *                 description: Brand ID
 *               typeId:
 *                 type: integer
 *                 description: Type ID
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "PRODUCT with ID=1 updated"
 *       404:
 *         description: Product not found
 */
router.put('/:id', productController.update)

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
router.delete('/:id', productController.delete)

module.exports = router
