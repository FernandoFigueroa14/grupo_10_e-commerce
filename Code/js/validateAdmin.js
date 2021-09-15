const validateAdmin = (req, res, next) => {
	const admins = process.env.ADMIN.split(' ')
	res.locals.isAdmin = false
	if (admins.includes(req.session.userLogged.emailUser)) {
		res.locals.isAdmin = true
		req.session.isAdmin = true
	}
	next()
}

module.exports = validateAdmin