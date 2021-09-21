const unkownEndPoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, req, res, next) => {
  console.log(error.message)
  next(error)
}

module.exports = { errorHandler, unkownEndPoint }