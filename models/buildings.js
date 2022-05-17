const mongoose = require('mongoose')
const Schema = mongoose.Schema

const buildingsSchema = new Schema({
    Site: {
        SiteAdi: { type: String, require: true },
        UyeSayisi: {type: Number, require: true},
        SiteKonum: {
            siteIl: {type: String, require: true},
            siteIlce: {type: String, require: true}
        },
        SiteBlok: [],
    }
})

const Site = mongoose.model('Buildings', buildingsSchema)
module.exports = Site   