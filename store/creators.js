import { callAPI } from './api-cache';
import { SET_POST, SET_POSTS } from './action';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchPosts = () => (dispatch) =>
  callAPI(`${API_URL}/posts`).then((posts) => dispatch({ type: SET_POSTS, posts }));

export const fetchPost = (postId) => (dispatch) =>
  callAPI(`${API_URL}/posts/${postId}`).then((post) => {
    if (post && Object.keys(post).length === 0 && post.constructor === Object) {
      throw new Error({ statusCode: 404 });
    }
    dispatch({ type: SET_POST, post });
  });
