import { applyMiddleware, createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from 'redux-thunk';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const debug = process.env.NEXT_PUBLIC_REDUX_DEBUG;

const reducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state };
    case 'SET_POSTS':
      return { posts: action.posts };
    default:
      return state;
  }
};

export function fetchPosts() {
  return (dispatch) =>
    fetch(`${API_URL}/posts`)
      .then((res) => res.json())
      .then((posts) => dispatch({ type: 'SET_POSTS', posts }));
}

const makeStore = (context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore, { debug });
