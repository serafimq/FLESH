const User = require("../models/users.model");

const findAllUser = async (req, res) => {
  try {
    const users = await User.find()

    return res.json(users)
  } catch (error) {
    return res.sendStatus(500)
  }
}

const userSignup = async (req, res) => {
  try {
    const { name, password } = req.body;
    if (name && password) {
      const newUser = await User.create({
        name,
        password,
        points: 0,
        flag: true,
        questions: [],
      })
      return res.json(newUser)
    }
    return res.sendStatus(500)
  } catch (error) {
  }
}

const userLogin = async (req, res) => {
  try {
    const { name, password } = req.body;
    if (name && password) {
      const user = await User.findOne({ name })
      user.flag = true;
      await user.save()
      return res.json(user)
    }
    return res.sendStatus(500)
  } catch (error) {
    return res.sendStatus(500)
  }
}

const getUserActive = async (req, res) => {
  try {
    const { activeUserId } = req.body;
    if (activeUserId) {
      const user = await User.findById(activeUserId)
      user.flag = true;
      await user.save()
      return res.json(user)
    }
    return res.sendStatus(500)
  } catch (error) {
    return res.sendStatus(500)
  }
}

const userLogout = async (req, res) => {
  try {
    const { name } = req.body.user;

    const activeUser = await User.findOne({ name })
    activeUser.flag = !activeUser.flag
    await activeUser.save()

    return res.json(activeUser)

    return res.sendStatus(500)
  } catch (error) {
    return res.sendStatus(500)
  }
}

module.exports = {
  userSignup,
  findAllUser,
  userLogin,
  userLogout,
  getUserActive,
}
