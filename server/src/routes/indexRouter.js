const express = require('express');
const { addQuestion, findQuestions, findActiveAnswer, findUserQuestions } = require('../controllers/indexController');

const router = express.Router();

router.route('/')
  .get(findQuestions)
  .post(addQuestion)
  .put(findActiveAnswer)
  .patch()
  .delete()

router.route('/homepage')
  .get()
  .post(findUserQuestions)
  .put()
  .patch()
  .delete()

module.exports = router;

