const Router = require('express')
const router = new Router()
const brandRouter = require('./brandRouter')
const productRouter = require('./productRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/brands', brandRouter)
router.use('/products', productRouter)
router.use('/types', typeRouter)
router.use('/users', userRouter)

module.exports = router
