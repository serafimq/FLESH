const Question = require('../models/question.model')
const User = require('../models/users.model')

const findQuestions = async (req, res) => {
  const posts = await Question.find({}, { answer: 0 })
  return res.json(posts);
}

const addQuestion = async (req, res) => {
  const { category, question, answer, price } = req.body.question
  const { id } = req.body

  const newQuestion = await Question.create({
    category,
    question,
    answer,
    price,
    creator: id,
    trueAnswers: [id],
    played: [id],

  })
  const user = await User.findById(id)
  user.questions.push(newQuestion._id)
  return res.json(newQuestion);
}

const findActiveAnswer = async (req, res) => {
  const { answer, questionId, userId } = req.body

  const user = await User.findById(userId)
  const question = await Question.findById(questionId)
  question.played.push(userId)
  if (question.answer === answer) {
    user.points += question.price
    question.trueAnswers.push(userId)
    await user.save()
    await question.save()
    return res.json({
      user,
      question,
    })
  }
  await question.save()
  return res.json({ user, question })
}

const findUserQuestions = async (req, res) => {
  const { userId } = req.body
  console.log(userId)

  const userQuestions = await Question.find({ creator: userId })

  return res.json(userQuestions)
}

module.exports = {
  addQuestion,
  findQuestions,
  findActiveAnswer,
  findUserQuestions
}
