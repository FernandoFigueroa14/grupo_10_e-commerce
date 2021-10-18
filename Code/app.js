require('dotenv').config()
const express = require('express')
const path = require('path')
const logger = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')
const cookies = require('cookie-parser')
const { Sequelize } = require('sequelize')

const userConfigDB = require('./database/config/config')
const routerMain = require('./routers/main')
const routerUser = require('./routers/user')
const routerProduct = require('./routers/product')
const routerCategories = require('./routers/categories')
const routerUserAPI = require('./routers/apiUser')
const userLoggedMiddleware = require('./js/userLoggedMiddleware')

const PORT = process.env.PORT || 3000

const app = express()

if (process.env.NODE_ENV !== 'production')
  process.env['ADMIN'] = 'root@gmail.com root00'


app.set('view engine', 'ejs')

app.use(express.static(path.resolve('./public')))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(logger('dev'))
app.use(cookies())
app.use(session( { secret: 'Acceso seguro', resave: false, saveUninitialized: false } ))
app.use(userLoggedMiddleware)

app.use(routerMain)
app.use(routerUser)
app.use('/api/users', routerUserAPI)
app.use('/product', routerProduct)
app.use(routerCategories)

app.use((error, req, res, next) => {
  console.log(error.message)
  next()
})
app.use((req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
})

app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT + ' :D')
})

const checkConectionDB = async () => {
  const userConfigDB_Development = userConfigDB.development
  const sequelize = new Sequelize(userConfigDB_Development.database, userConfigDB_Development.username, userConfigDB_Development.password, {
    host: userConfigDB_Development.host,
    port: userConfigDB_Development.port,
    dialect: userConfigDB_Development.dialect
  })
  try {
    await sequelize.authenticate()
    console.log('Connection to MySQL DataBase has been established successfully')
  } catch (error) {
    console.error('Unable to connect to the database: ', error)
  }
}

checkConectionDB()

// Cuenta de amdin [add, edit, delete]
// ---
// root@gmail.com
// root00