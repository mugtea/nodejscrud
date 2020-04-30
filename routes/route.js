const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')
var mhsController = require('../controllers/mahasiswaController')

router.get('/testa/:id', mhsController.test)
router.get('/', mhsController.home)
router.post('/', mhsController.save)
router.get('/delete/:id', mhsController.delete)

module.exports = router;