import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import promise from 'redux-promise';

export default applyMiddleware(promise)(createStore)(reducer);