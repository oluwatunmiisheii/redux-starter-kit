import { v4 as uuidv4 } from 'uuid';
const initialState = {
  results: []
}
export const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({ id: uuidv4(), val: action.payload.res })
      }
    case 'DELETE_RESULT':
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.payload.id)
      }
    default:
      return state
  }
}