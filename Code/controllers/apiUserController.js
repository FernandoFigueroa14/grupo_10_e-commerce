const path = require('path')
const db = require('../database/models')

const apiController = {
  getUsers: async (req, res) => {
    const data = await db.Users.findAll()
    const users = data.map((user) => {
      const { user_id, nameUser, emailUser } = user.dataValues
      const detail = 'http://localhost:3000/api/users/' + user_id
      return { user_id, nameUser, emailUser, detail }
    })
    res.json({
      meta: {
        status: 200,
        total: users.length,
        url: '/api/users'
      },
      data: users
    })
  },
  getUser: async (req, res) => {
    const data = await db.Users.findByPk(req.params.id)
    delete data.dataValues.passwordUser
    data.dataValues.profilePic = 'http://localhost:3000/api/users/img/' + data.dataValues.profilePic
    res.json({
      meta: {
        status: 200,
        total: data.length,
        url: '/api/users/' + data.dataValues.user_id
      },
      data: data
    })
  },
  getUserImg: (req, res) => {
    res.sendFile(path.resolve('public/images/img-profiles/' + req.params.img))
  }
}

module.exports = apiController