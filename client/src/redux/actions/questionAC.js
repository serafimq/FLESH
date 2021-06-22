import { SET_QUEST, SET_USER_QUEST, ADD_QUEST, EDIT_QUEST, SET_QUEST_SAGA, ADD_QUEST_SAGA } from '../types/questionTypes'
import axios from 'axios';

const setQuestionsSaga = () => {
  return {
    type: SET_QUEST_SAGA
  }
}
const setQuestions = (questions) => {
  return {
    type: SET_QUEST,
    payload: questions,
  }
}

const setUserQuestions = (userId) => async (dispatch) => {

  const result = await axios.post('/homepage', { userId })
  dispatch(userQuestions(result.data))
}
const userQuestions = (questions) => {
  return {
    type: SET_USER_QUEST,
    payload: questions,
  }
}

const rightQuestion = (question) => {
  return {
    type: EDIT_QUEST,
    payload: question,
  }
}


const addQuestionsSaga = (question, id) => {
  return {
    type: ADD_QUEST_SAGA,
    payload: { question, id },
  }
}
const addQuestions = (questions) => {
  return {
    type: ADD_QUEST,
    payload: questions,
  }
}

export {
  setQuestions,
  rightQuestion,
  setQuestionsSaga,
  addQuestionsSaga,
  addQuestions,
  setUserQuestions
}
