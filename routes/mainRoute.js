const express = require("express")
const mainController = require('../controllers/mainController')
const redirectMiddleware = require('../middlewares/redirectMiddleware')

const router = express.Router();

router.route('/').get(mainController.Index)
router.route('/register').get(redirectMiddleware, mainController.registerPage)
router.route('/login').get(redirectMiddleware, mainController.loginPage)

module.exports = router;