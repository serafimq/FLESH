const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  points: Number,
  flag: Boolean,
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
    }
  ]
})

const User = mongoose.model('User', userSchema)

module.exports = User;
