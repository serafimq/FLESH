import { ALL_USERS, SET_USER } from '../types/userTypes'
import axios from 'axios'
import { rightQuestion } from './questionAC'

const showActivUser = () => async (dispatch) => {
  const activeUserId = JSON.parse(localStorage.getItem('Active user'))
  if (activeUserId) {
    const result = await axios.post('/user/active', { activeUserId })
    dispatch(setUser(result.data))
    localStorage.setItem('Active user', JSON.stringify(result.data._id))
  } else {
    const result = await axios('/user')
    dispatch(allUsers(result.data))
  }
}

const createUser = (name, password) => async (dispatch) => {
  const result = await axios.post('/user', { name, password })
  dispatch(setUser(result.data))
  localStorage.setItem('Active user', JSON.stringify(result.data._id))
}

const loginUser = (name, password) => async (dispatch) => {
  const result = await axios.put('/user', { name, password })
  dispatch(setUser(result.data))
  localStorage.setItem('Active user', JSON.stringify(result.data._id))
}

const allUsers = (users) => {
  return {
    type: ALL_USERS,
    payload: users
  }
}

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  }
}

const logoutUser = (user) => async (dispatch) => {
  const result = await axios.patch('/user', { user })
  dispatch(setUser({}))
}

const setActiveAnswer = (answer, questionId, userId) => async (dispatch) => {

  const result = await axios.put('/', {
    answer,
    questionId,
    userId,
  })

  dispatch(setUser(result.data.user))
  dispatch(rightQuestion(result.data.question))

}




export {
  setUser,
  createUser,
  loginUser,
  logoutUser,
  showActivUser,
  allUsers,
  setActiveAnswer,
}
