import * as t from './types';

const initialState = {
  shots: [],
  page: 1
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case t.LOAD_SHOTS_LIST:
      return Object.assign({}, state, {
        shots: [...state.shots, ...action.payload.data],
      });
    case t.PAGINATE:
      return Object.assign({}, state, { page: action.page });
    default:
      return state;
  }
}