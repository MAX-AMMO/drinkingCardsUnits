/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import trSelectReducer from './trSelectReducer';

export default combineReducers({
 simpleReducer,
 trSelectReducer
});