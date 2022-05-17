const auditorLogin_get = (req, res) => {
    res.render('auditor/auditorLogin', { title: 'Kullanıcı Girişi' })
}

const userLogin_get = (req, res) => {
    res.render('user/userLogin', { title: 'Kullanıcı Girişi' })
}

// const register_index = (req, res) => {
//     res.render('admin/register', { title: 'Kayıt Ol' })
// }

// const register_post = (req, res) => {
//     const yonetimUser = new Yonetim(req.body)
//     yonetimUser.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }

// const login_index = (req, res) => {
//     res.render('admin/yonetimLogin', { title: 'Giriş' })
// }

// const login_post = async (req, res) => {
//     const { username, password } = req.body
//     try {
//         const user = await Yonetim.login(username, password)
//         const token = createToken(user._id)
//         res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
//         res.redirect('/admin')
//     } catch (e) {
//         console.log(e)
//     }

// }

// const logout_get = (req,res) =>{
//     res.cookie('jwt', '', {maxAge: 1})
//     res.redirect('/login')
// }

module.exports = {
    auditorLogin_get,
    userLogin_get
}