const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const yonetimUser = new mongoose.Schema({
    Kadi: { type: String, require: true, unique: true },
    adSoyad: { type: String, require: true },
    telNo: { type: Number, require: true, unique: true },
    eMail: { type: String, require: true, unique: true },
    password: { type: String, require: true }
})

yonetimUser.statics.login = async function (username, password) {
    const yonetimUser = await this.findOne({Kadi: username })
    console.log(yonetimUser)
    if (yonetimUser) {
        const auth = await bcrypt.compare(password, yonetimUser.password)
        if (auth) {
            return yonetimUser
        }
        else {
            throw Error("Parola Hatalı")
        }
    }
    else {
        throw Error("Kullanıcı Yok")
    }
}

yonetimUser.pre('save', async function (next) {
    try {
        console.log("Deneme", this.Kadi, this.password)
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(this.password, salt)
        this.password = hashPass;
        next()
    } catch {
        next(error)
    }
})

const Yonetim = mongoose.model('yonetimuserlist', yonetimUser)
module.exports = Yonetim   