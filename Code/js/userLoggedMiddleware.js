const modelUser = require('../models/modelUser')

function userLoggedMiddleware(req, res, next){
	let cookieEmail = req.cookies.emailUser
	let userFromCookie = modelUser.findByField('emailUser', cookieEmail)

	if(userFromCookie){
		req.session.userLogged = userFromCookie
	}
	next()
}

module.exports = userLoggedMiddleware