import axios from '../../axios'

const fetchPostRequest = () => {
  return {
    type: 'FETCH_ POSTS_REQUEST'
  }
}

const fetchPostSuccess = users => {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    payload: users

  }
}

const fetchPostFailure = error => {
  return {
    type: 'FETCH_POSTS_FAILURE',
    payload: error

  }
}

export const fetchPosts = () => {
  return function (dispatch) {
    dispatch(fetchPostRequest())
    axios.get('/posts').then(response => {
      const posts = response.data
      dispatch(fetchPostSuccess(posts))
    }).catch(err => {
      dispatch(fetchPostFailure(err.message))
    })
  }
}
