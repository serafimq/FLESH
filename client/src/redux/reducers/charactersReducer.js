import { SET_CHAR } from '../types/charactersTypes'

const charactersReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CHAR:
      return action.payload
    default:
      return state;
  }
}

export default charactersReducer
