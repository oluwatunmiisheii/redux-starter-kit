const initialState = {
  loading: false,
  posts: [],
  error: ''
}
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        Loading: false,
        posts: action.payload,
        error: ''
      }
    case 'FETCH_POSTS_FAILURE':
      return {
        ...state,
        Loading: false,
        posts: [],
        error: action.payload
      }
    default:
      return state
  }
}