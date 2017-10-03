import * as t from './types';

const initialState = {
  shots: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case t.LIST_SHOTS:
      return Object.assign({}, state, { shots: action.payload.data });
    default:
      return state;
  }
}