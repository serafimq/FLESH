import { call, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setQuestions, addQuestions } from '../actions/questionAC';
import { ADD_QUEST_SAGA, SET_QUEST_SAGA } from '../types/questionTypes';


const fechData = async () => {
  const res = await axios('/main')
  console.log(res.data);
  return res.data
}

const fechNewQuest = async ({ question, id }) => {
  const res = await axios.post('/main', { question, id })
  return res.data
}


function* newQuestionsSagaWorker(action) {
  try {
    const newQuestionDataFromServer = yield call(fechNewQuest, action.payload);
    yield put(addQuestions(newQuestionDataFromServer));
  } catch (e) {
    yield put(addQuestions([{ _id: 123455667, word: 'Back is dead' }]));
  }
}

function* questionsSagaWorker(action) {
  try {
    const wordsDataFromServer = yield call(fechData, action.payload);
    yield put(setQuestions(wordsDataFromServer));
  } catch (e) {
    yield put(setQuestions([{ _id: 123455667, word: 'Back is dead' }]));
  }
}

function* questionsSagaWatcher() {
  yield all([
    takeLatest(SET_QUEST_SAGA, questionsSagaWorker),
    takeLatest(ADD_QUEST_SAGA, newQuestionsSagaWorker)
  ])
}

export default questionsSagaWatcher
