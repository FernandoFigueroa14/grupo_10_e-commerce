let db = require('../database/models')
const { Op } = require('sequelize')

function userLoggedMiddleware(req, res, next) {
  if (req.cookies.emailUser) {
    db.Users.findAll({
      where: {
        emailUser: { [Op.eq]: req.cookies.emailUser }
      }
    })
      .then((user) => {
        req.session.userLogged = user[0].dataValues
      })
      .catch((error) => {
        console.log('error ' + error)
      })
  }
  next()
}

module.exports = userLoggedMiddleware