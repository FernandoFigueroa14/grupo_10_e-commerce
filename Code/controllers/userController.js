const path = require('path')
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')
const { Op } = require('sequelize')

let db = require('../database/models')

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
          if (userToLogin[0].dataValues.gender === 'male') {
            return res.redirect('/men')
          } else {
            return res.redirect('/women')
          }
        } else {
          return res.render(path.resolve('views/userViews/login'), { errors: { user: { msg: 'Las credenciales son inválidas' } } })
        }
      })
      .catch((error) => {
        console.log(error)
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
              profilePic: req.file ? req.file.filename : 'img-profile-1634002700663.png'
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
  editUser: (req, res, next) => {
    db.Users.findAll({
      where: {
        emailUser: { [Op.eq]: req.session.userLogged.emailUser }
      }
    })
      .then((user) => {
        res.render(path.resolve('views/userViews/editUserForm'), { user: user[0].dataValues })
      })
      .catch((error) => {
        next(error)
      })
  },
  saveUpdatedUser: (req, res, next) => {
    const resultValidation = validationResult(req)
    if (!resultValidation.isEmpty()) {
      db.Users.findAll({
        where: {
          emailUser: { [Op.eq]: req.session.userLogged.emailUser }
        }
      })
        .then((user) => {
          console.log(resultValidation.mapped())
          res.render(path.resolve('views/userViews/editUserForm'), { errors: resultValidation.mapped(), oldData: req.body, user: user[0].dataValues })
        })
        .catch((error) => {
          next(error)
        })
    } else {
      const userID = req.session.userLogged.user_id
      db.Users.findByPk(userID)
        .then((userEdit) => {
          const user_pic = req.file ? req.file.filename : userEdit.profilePic
          db.Users.update({
            ...userEdit.dataValues,
            nameUser: req.body.name,
            lastNameUser: req.body.lastname,
            gender: req.body.gender,
            profilePic: user_pic
          }, { where: { user_id: userID } })
        })
        .catch((error) => {
          next(error)
        })
      res.redirect('/profile')
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
    res.redirect('/login')
  }
}

module.exports = userController

/* dataValues: {
user_id: 1628632503079,
emailUser: 'federico@hotmail.com',
passwordUser: '$2a$10$cZWKrQ6x/xENog5ty.JOJO5.74BdTqlOJYZ9OVuTWLQXTHM2rI5e2',
nameUser: 'Federico',
lastNameUser: 'Villegas',
birth_date: '1997-10-10',
gender: 'male',
profilePic: 'img-profile-1632497131570.jpeg' */