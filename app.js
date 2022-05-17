const express = require('express')
const { default: mongoose } = require('mongoose')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const Site = require("./models/buildings")
const adminRoutes = require("./routes/adminRoutes")
const authRoutes = require("./routes/authRoutes")
const {requireAuth} = require('./middlewares/authMiddleware')


const app = express()

const port = process.env.PORT || 5000;

const dbURL = 'mongodb+srv://sametdokumaci:5468615000s@deneme.llwy6.mongodb.net/Buildings?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result => app.listen(port)))
    .catch((err) => console.log(err))


app.set('view engine', 'ejs')
app.use(express.static('images'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cookieParser())

app.use(adminRoutes)
app.use(authRoutes)

app.get('/', (req, res) => {
    res.render('index', { title: 'Anasayfa' })
})
app.get('/index', (req, res) => {
    res.redirect('/')
})
app.get('/anasayfa', (req, res) => {
    res.redirect('/')
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'Hakkımızda' })
})



