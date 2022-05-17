const express = require("express")
const router = express.Router()
const Site = require("../models/buildings")
const authController = require("../controllers/authController")

router.get('/kullanici-girisi', authController.userLogin_get)
router.get('/denetci-girisi', authController.auditorLogin_get)

module.exports = router