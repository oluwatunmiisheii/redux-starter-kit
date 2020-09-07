const initialState = {
  counter: 0
}
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + action.payload.value
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - action.payload.value
      }
    default:
      return state
  }
}