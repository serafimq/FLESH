import { SET_CHAR, SET_CHAR_SAGA } from '../types/charactersTypes'


const setCharactersSaga = (characters) => {
  return {
    type: SET_CHAR_SAGA,
    payload: characters,
  }
}
const setCharacters = (characters) => {
  return {
    type: SET_CHAR,
    payload: characters,
  }
}

export {
  setCharacters,
  setCharactersSaga,
}
