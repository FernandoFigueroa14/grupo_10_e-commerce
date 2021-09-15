const checkAdmin = (req, res, next) => {
	if (!req.session.isAdmin) {
		res.redirect('/')
	} else {
		next()
	}
}

module.exports = checkAdmin