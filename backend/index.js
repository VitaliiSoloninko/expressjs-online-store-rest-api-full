require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const erroeHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const PORT = process.env.PORT || 5000

// Swagger configuration
const swaggerOptions = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Online Store API',
			version: '1.0.0',
			description: 'A comprehensive REST API for an online store application',
		},
		servers: [
			{
				url: `http://localhost:${PORT}`,
				description: 'Development server',
			},
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT',
				},
			},
		},
	},
	apis: ['./routes/*.js'], // Path to the API files
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/api', router)
app.use(erroeHandler)

const start = async () => {
	try {
		// Временно закомментировано для просмотра Swagger без БД
		// await sequelize.authenticate()
		// await sequelize.sync()
		app.listen(PORT, () => {
			console.log(`Server started on port ${PORT}`)
			console.log(`Swagger UI available at: http://localhost:${PORT}/api-docs`)
		})
	} catch (e) {
		console.log(e)
	}
}

start()
