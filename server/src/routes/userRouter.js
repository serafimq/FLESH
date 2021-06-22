const express = require('express');
const { userSignup, findAllUser, userLogin, userLogout, getUserActive } = require('../controllers/userController');

const router = express.Router();

router.route('/')
  .get(findAllUser)
  .post(userSignup)
  .put(userLogin)
  .patch(userLogout)

router.route('/active')
  .post(getUserActive)

module.exports = router;

