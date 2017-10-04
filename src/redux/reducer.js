import * as t from './types';
import formatShotData from '../utils/format-shot-data';

const initialState = {
  shots: [],
  shot: {},
  page: 1,
  typeImage: 'medium',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case t.LOAD_SHOTS_LIST:
      if (action.payload.data === undefined) return state;
      return { ...state, shots: [ ...state.shots, ...action.payload.data.map(formatShotData) ] }
    
    case t.LOAD_SHOT:
      return { ...state, shot: formatShotData(action.payload.data) };
    
    case t.CLEAR_SHOT:
      return { ...state, shot: {} }
    
    case t.PAGINATE:
      return Object.assign({}, state, { page: action.page });
    
    case t.SHOW_LARGE_IMAGE:
      return { ...state, typeImage: 'large' };
    
    case t.HIDE_LARGE_IMAGE:
      return { ...state, typeImage: 'medium' };
    
    default:
      return state;
  }
}