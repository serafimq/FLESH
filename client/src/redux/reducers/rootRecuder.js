import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
import questionReducer from './questionReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  questions: questionReducer,
  characters: charactersReducer,
})

export default rootReducer
