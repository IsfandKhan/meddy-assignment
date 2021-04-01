import { applyMiddleware, createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import * as actions from './action';

const debug = process.env.NEXT_PUBLIC_REDUX_DEBUG;

const reducer = (state = { posts: [], post: {} }, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state };

    case actions.SET_POSTS:
      return { ...state, posts: action.posts };

    case actions.SET_POST:
      return { ...state, post: action.post };

    default:
      return state;
  }
};

const makeStore = (_context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore, { debug });
