import { applyMiddleware, createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import cacheData from 'memory-cache';

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

async function callAPI(url) {
  const value = cacheData.get(url);
  if (value) {
    return new Promise((resolve) => {
      resolve(value);
    });
  } else {
    return fetch(url).then((res) => {
      const hours = 24;
      const data = res.json();
      cacheData.put(url, data, hours * 1000 * 60 * 60);
      return data;
    });
  }
}

export function fetchPosts() {
  return (dispatch) => callAPI(`${API_URL}/posts`).then((posts) => dispatch({ type: 'SET_POSTS', posts }));
}

const makeStore = (context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore, { debug });
