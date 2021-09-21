const multer = require('multer')
const path  = require('path')

var storageUser = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/img-profiles')
  },
  filename: function (req, file, cb) {
    cb(null, 'img-profile' + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storageUser })

module.exports = upload