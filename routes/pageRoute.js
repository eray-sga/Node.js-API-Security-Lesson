const express = require("express")
const pageController = require('../controllers/pageController')
const roleMiddleware = require('../middlewares/roleMiddleware')

const router = express.Router();

router.route('/').post(roleMiddleware(["admin"]), pageController.createPage)


module.exports = router;