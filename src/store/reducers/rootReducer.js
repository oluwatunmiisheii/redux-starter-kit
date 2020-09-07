import { counterReducer } from './counter'
import { resultReducer } from './result'
import { postsReducer } from './posts'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  counter: counterReducer,
  result: resultReducer,
  posts: postsReducer
})