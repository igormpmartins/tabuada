const express = require('express')
const controller = require('../controllers/contato')
const router = express.Router()

router.get('/', controller.contato)

module.exports = router