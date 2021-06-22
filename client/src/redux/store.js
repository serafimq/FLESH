import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import initState from './initState'
import rootReducer from './reducers/rootRecuder'
import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import questionsSagaWatcher from './sagas/questionsSaga';
import charactersSagaWatcher from './sagas/charactersSaga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(questionsSagaWatcher)
sagaMiddleware.run(charactersSagaWatcher)

export default store
