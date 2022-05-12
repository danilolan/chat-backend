const express = require('express')
const roomController = require('../controllers/roomController')

const router = express.Router()

router
  .get('/room', roomController.create)
  .get('/room/verify', roomController.verify)

module.exports = router
