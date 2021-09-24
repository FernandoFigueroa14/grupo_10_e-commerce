const path = require('path')
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')
const { Op } = require('sequelize')

let db = require('../database/models')
const modelUser = require('../models/modelUser')
const { nextTick } = require('process')
// const { Cipher } = require('crypto')

const userController = {
  login: (req, res) => {
    res.render(path.resolve('views/userViews/login'))
  },
  processLogin: (req, res) => {
    const emailUserToLogin = req.body.user
    db.Users.findAll({
      where: {
        emailUser: { [Op.eq]: emailUserToLogin }
      }
    })
      .then((userToLogin) => {
        if(bcryptjs.compareSync(req.body.password, userToLogin[0].dataValues.passwordUser)) {
          delete userToLogin[0].dataValues.passwordUser
          req.session.userLogged = userToLogin[0].dataValues
          if(req.body.remember_user) {
            res.cookie('emailUser', emailUserToLogin, { maxAge: (1000*60)*60 })
          }
          return res.redirect('/profile')
        } else {
          return res.render(path.resolve('views/userViews/login'), { errors: { user: { msg: 'Las credenciales son inválidas' } } })
        }
      })
      .catch(() => {
        return res.render(path.resolve('views/userViews/login'), { errors: { user: { msg: 'No se encuentra este correo electronico en nuestra base de datos' } } })
      })
  },
  register: (req, res) => {
    res.render(path.resolve('views/userViews/register'))
  },
  processRegister: (req, res, next) => {
    const resultValidation = validationResult(req)
    if (!resultValidation.isEmpty()) {
      res.render(path.resolve('views/userViews/register'), { errors: resultValidation.mapped(), oldData: req.body })
    } else {
      db.Users.findAll({
        where: {
          emailUser: { [Op.eq]: req.body.emailUser }
        }
      })
        .then((dataUser) => {
          if (!dataUser.length) {
            db.Users.create({
              ...req.body,
              passwordUser: bcryptjs.hashSync(req.body.passwordUser, 10),
              profilePic: req.file.filename
            })
            res.redirect('/login')
          } else {
            return res.render(path.resolve('views/userViews/register'), { errors: { emailUser: { msg: 'Este correo electronico ya está registrado' } }, oldData: req.body })
          }
        })
        .catch((error) => {
          console.log(error)
          next(error)
        })
    }
  },
  recoverPassword: (req, res) => {
    res.render(path.resolve('views/userViews/recoverPassword'))
  },
  cart: (req, res) => {
    res.render(path.resolve('views/carrito'))
  },
  profile: (req, res) => {
    res.render(path.resolve('views/userViews/userProfile'), { user: req.session.userLogged })
  },
  logout: (req, res) => {
    res.clearCookie('emailUser')
    req.session.destroy()
    res.redirect('/')
  }
}

module.exports = userController