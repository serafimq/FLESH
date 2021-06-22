const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  category: String,
  question: String,
  answer: String,
  price: Number,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  played: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
  trueAnswers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  ]
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question;
