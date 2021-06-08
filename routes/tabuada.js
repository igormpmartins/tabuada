const express = require('express')
const controller = require('../controllers/tabuada')
const router = express.Router()

router.get('/', controller.list)
router.get('/do/:num', controller.tabuada)

module.exports = router
