const express = require("express")
const router = express.Router()
const Site = require("../models/buildings")
const Yonetim = require("../models/yonetimUser")
const adminController = require("../controllers/adminController")
const {requireAuth} = require('../middlewares/authMiddleware')

router.get('/admin',requireAuth, adminController.admin_index)
router.get('/site-ekle', adminController.addBuild_index)
router.post('/site-ekle', adminController.addBuild)
router.get('/daire-ekle', adminController.addFlat_index)
router.post('/daire-ekle', adminController.addFlat)
router.get("/kayitol", adminController.register_index)
router.post("/kayitol", adminController.register_post)
router.get('/login', adminController.login_index)
router.post('/login', adminController.login_post)
router.get('/logout', adminController.logout_get)

module.exports = router