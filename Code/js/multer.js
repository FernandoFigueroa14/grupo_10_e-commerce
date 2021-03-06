const multer = require('multer')
const path  = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/img-products')
  },
  filename: function (req, file, cb) {
    cb(null, 'img-product' + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage })

module.exports = upload