import * as sentry from '@sentry/browser';
import { request } from '../backend-services';
import { SET_POST, SET_POSTS } from './action';

const errorHandler = (err) => {
  sentry.captureException(err);
};

export const fetchPosts = () => (dispatch) =>
  request
    .get('/posts')
    .then((posts) => dispatch({ type: SET_POSTS, posts }))
    .catch(errorHandler);

export const fetchPost = (postId) => (dispatch) =>
  request
    .get(`/posts/${postId}`)
    .then((post) => dispatch({ type: SET_POST, post }))
    .catch(errorHandler);
