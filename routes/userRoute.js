const express = require("express")
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();

router.route('/register').post(userController.createUser)
router.route('/login').post(userController.loginUser)
router.route('/logout').get(userController.logoutUser)
router.route('/profile').get(authMiddleware, userController.getDashboardPage)
router.route('/profile/:id').get(authMiddleware, userController.getProfile)

module.exports = router;