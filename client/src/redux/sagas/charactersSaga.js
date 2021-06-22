import { call, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';
import axios from 'axios';

import { SET_CHAR_SAGA } from '../types/charactersTypes';
import { setCharacters } from '../actions/charactersAC';


const fechData = async () => {
  const res = await axios('https://rickandmortyapi.com/api/character')
  return res.data
}

function* charactersSagaWorker(action) {
  try {
    const wordsDataFromServer = yield call(fechData, action.payload);
    yield put(setCharacters(wordsDataFromServer));
  } catch (e) {
    yield put(setCharacters([{ _id: 123455667, word: 'Back is dead' }]));
  }
}

function* charactersSagaWatcher() {
  // задержка в 0,5 сек
  yield throttle(500, SET_CHAR_SAGA, charactersSagaWorker);
}

export default charactersSagaWatcher
