import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../store/actions/posts';

const Posts = ({ userData }) => {
  const dispatch = useDispatch()
  const postData = useSelector(state => state.posts)
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  return postData.loading ? (
    <div>Posts</div>
  ) : postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
        <div>
          <h2>Post List</h2>
          <div>
            {postData &&
              postData.posts &&
              postData.posts.map((post, index) => {
                return (
                  <div key={index}>
                    <span>{post.title}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
}

export default Posts;