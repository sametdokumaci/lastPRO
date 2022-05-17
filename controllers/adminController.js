const Site = require("../models/buildings")
const Yonetim = require("../models/yonetimUser")
const jwt = require('jsonwebtoken')


const maxAge = 60 * 60 * 24;
const createToken = (id) => {
    return jwt.sign({ id }, "KullanıcıKim", { expiresIn: maxAge })
}

const addBuild = async (req, res) => {
    const buildings = new Site(req.body)
    await buildings.save()
        .then((result) => {
            res.send(result)
            res.redirect('/daire-ekle')
        })
        .catch((err) => {
            console.log(err)
        })
}

const addBuild_index = (req, res) => {
    res.render('admin/siteekle', { title: 'Site Ekle' })
}

const addFlat = async (req, res) => {

    const update = {'Site.SiteBlok' : req.body}
    let deneme = await Site.find({"Site.SiteAdi" : "3131"})
    let bul = await Site.find({"Site.SiteAdi": "3131"})
    // console.log(bul)
    let doc = await Site.updateOne({"Site.SiteAdi" : "3131"}, {$push : update})
}

const addFlat_index = (req, res) => {
    res.render('admin/daire-ekle', { title: 'Site Ekle' })
}

const admin_index = (req, res) => {
    res.render('admin/admin', { title: 'Admin Paneli' })
}

const register_index = (req, res) => {
    res.render('admin/register', { title: 'Kayıt Ol' })
}

const register_post = (req, res) => {
    const yonetimUser = new Yonetim(req.body)
    console.log(req.body)
    yonetimUser.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

const login_index = (req, res) => {
    res.render('admin/yonetimLogin', { title: 'Giriş' })
}

const login_post = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await Yonetim.login(username, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.redirect('/admin')
    } catch (e) {
        console.log(e)
    }

}

const logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.redirect('/login')
}
module.exports = {
    addBuild,
    addBuild_index,
    admin_index,
    register_index,
    register_post,
    login_index,
    login_post,
    logout_get,
    addFlat,
    addFlat_index
}