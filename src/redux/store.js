import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import promise from 'redux-promise';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && 
								 window.__REDUX_DEVTOOLS_EXTENSION__();

export default applyMiddleware(promise)(createStore)(reducer, devTools);