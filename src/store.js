import { combineReducers, configureStore } from '@reduxjs/toolkit';

import movieReducer from './components/movieSlice';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


export default configureStore({
  reducer:
  {

    movies:movieReducer,
  },

})