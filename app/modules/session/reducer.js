import { Map } from 'immutable';
import { resolveEach } from 'redux-resolver';
import * as actionTypes from './actionTypes';

export const initialState = Map({
  user: Map()
});

function login(state, action) {
  return state.merge({ user: action.user });
}

function clear() {
  return initialState;
}

export default resolveEach(initialState, {
  [actionTypes.LOGIN]: login,
  [actionTypes.CLEAR]: clear
});

